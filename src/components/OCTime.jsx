import React from 'react'
import {useStatus} from "../hooks/useStatus"
import {motion} from 'framer-motion'
import '../styles/OCTime.css'
import checkSymbol from '../images/check.svg'
import crossSymbol from '../images/cross.svg'

const OCTime = () => {
    const {time,timeOriginal, morning, evening} = useStatus();
  const x= (morning ? 0:30);
  const y= (evening ? 0:30);
  console.log("x", morning, x, "y",evening, y)
  return (
    <div className='timeContainer'>
        {/* opening and closing time */}
        <div className="openingTime">
            <div>{(morning || evening)? "open":"close"}</div>
            <div className='morningTime'>
                <div className='range'>
                    <motion.div animate={{x:x}} transition={{type:"spring"}} className='toggleBar'>
                    {morning ? <img src={checkSymbol}/>:<img src={crossSymbol} className="center"/>}
                    </motion.div>
                </div>
                <div className='timeRange'>6:30 AM - 9:30 AM</div>
            </div>
            <div className='eveningTime'>
                <div className='range'>
                    <motion.div animate={{x:y}} transition={{type:"spring", duration:2}} className='toggleBar'>
                    {evening ? <img src={checkSymbol}/>:<img src={crossSymbol} className="center"/>}
                    </motion.div>
                </div>
                <div className='timeRange'>5:30 PM - 7:30 PM</div>
            </div>
        </div>
    </div>
  )
}

export default OCTime