import * as React from 'react';
import '../styles/pricing.css'
import { priceData } from '../data/card';
import {motion} from 'framer-motion'
export interface  PricingProps {
}

export default function Pricing (props:  PricingProps) {
  return (
    <div className='pricing'>
      <div className='stroke-text price-head'>Affordable prices </div>
      <div className='price-head'>only for our Clients</div>
      <div className='card-container'>
        <div className="card-container-inner">
          {priceData.map((data, i)=>{
            console.log('map data', data)
            return(
              <motion.div 
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              key={i} className='card'>
                <span className='card-saying'>{data.saying}</span>
                <img src={data.image} alt="image" className='card-image'/>
                <span className='card-name'>{data.name}</span>
                <span className='card-features'>{data.features.map((feature, i)=>{
                  return(
                    <>
                      <p key={i}>{feature}</p>
                    </>
                  )
                })}</span>
                {/* <div className='card-price'>{data.price}</div>             */}
              </motion.div>
            )
          })}
        </div>
      </div>
      <div>
      </div>
      {/* <div className='btn-div'>
        <button className='priceButton btn'>See all prices</button>
      </div> */}
    </div>
  );
}
