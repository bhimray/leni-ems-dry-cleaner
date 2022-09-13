import * as React from 'react';
import '../styles/pricing.css'
import { priceData } from '../data/card';
export interface  PricingProps {
}

export default function Pricing (props:  PricingProps) {
  return (
    <div className='pricing'>
      <div className='stroke-text price-head'>Affordable prices </div>
      <div className='price-head'>only for our Clients</div>
      <div className='card-container'>
        {priceData.map((data, i)=>{
          console.log('map data', data)
          return(
            <div className='card'>
              <div className='card-saying'>{data.saying}</div>
              <div className='card-image'>{data.image}</div>
              <div className='card-name'>{data.name}</div>
              <div className='card-features'>{data.features}</div>
              <div className='card-price'>{data.price}</div>            
            </div>
          )
        })}
      </div>
      <div></div>
      <div></div>
    </div>
  );
}
