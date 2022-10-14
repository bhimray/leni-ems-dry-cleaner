import React from 'react'
import {useState, useEffect} from 'react'
import {useStatus} from "../hooks/useStatus"
import {motion} from 'framer-motion'
import '../styles/OCTime.css'
import checkSymbol from '../images/check.svg'
import crossSymbol from '../images/cross.svg'

const OCTime = () => {
    const [openingTime, setOpeningTime] =  useState(false)
    const [closeTime, setCloseTime] = useState(true)
    const {mondayToFridayOpening, saturdayOpening} = useStatus();
  const x= (mondayToFridayOpening ? 0:3);
  const y= (saturdayOpening ? 0:3);
  const date= new Date();
  const day = date.toLocaleDateString('en-US', {weekday: 'short'})

  useEffect(() => {
    setOpeningTime(true)
  }, [])
  
  const openEffect=(e)=>{
    e.preventDefault()
    setCloseTime(!closeTime)
  }
  console.log("x", mondayToFridayOpening, x, "y",saturdayOpening, y)
  return (
    <div className='timeContainer'>
        {/* opening and closing time */}
        <div className="openingTime">
            {openingTime ?
            <>
                {closeTime?
                <div className='range' onClick={(e)=>openEffect(e)}>
                    <motion.div animate={{x:x}} transition={{type:"spring"}} className='toggleBar'>
                        {mondayToFridayOpening ? <img src={checkSymbol}/>:<img src={crossSymbol} className="center"/>}
                    </motion.div>
                    <motion.div animate={{x:-x}} transition={{type:"spring"}} className='showStatus'>{mondayToFridayOpening? "open":"close"}</motion.div>
                </div>
                :
                <div className='morningTime' onClick={(e)=>openEffect(e)}>
                    <div className='range'>
                        <motion.div animate={{x:x}} transition={{type:"spring"}} className='toggleBar'>
                            {mondayToFridayOpening ? <img src={checkSymbol}/>:<img src={crossSymbol} className="center"/>}
                        </motion.div>
                        <motion.div animate={{x:-x}} transition={{type:"spring"}} className='showStatus'>{mondayToFridayOpening? "open":"close"}</motion.div>
                    </div>
                    <div className='timeRange'>7:00 AM - 7:00 PM</div>
                </div>
                }
            </>
            :
            <>
                <div>{saturdayOpening? "open":"close"}</div>
                <div className='morningTime'>
                    <div className='range'>
                        <motion.div animate={{x:y}} transition={{type:"spring"}} className='toggleBar'>
                        {saturdayOpening ? <img src={checkSymbol}/>:<img src={crossSymbol} className="center"/>}
                        </motion.div>
                    </div>
                    <div className='timeRange'>7:00 AM - 6:00 PM</div>
                </div>
            </>
            }
            {/* <div className='eveningTime'>
                <div className='range'>
                    <motion.div animate={{x:y}} transition={{type:"spring", duration:2}} className='toggleBar'>
                    {evening ? <img src={checkSymbol}/>:<img src={crossSymbol} className="center"/>}
                    </motion.div>
                </div>
                <div className='timeRange'>5:30 PM - 7:30 PM</div>
            </div> */}
        </div>
    </div>
  )
}

export default OCTime