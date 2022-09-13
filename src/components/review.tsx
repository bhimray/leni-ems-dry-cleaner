import * as React from 'react';
import fullStar from '../images/rating-full-star.svg'
import halfStar from '../images/rating-half-star.svg'
import '../styles/review.css'
export interface  ReviewProps {
}

export default function Review (props:  ReviewProps) {
  return (
    <div className='review'>
        <div>Ranked No.1 by customers</div>
        <div>in categories Laundry service, dry cleaning</div>
        <div>
          <img src={fullStar} alt="rating" className='star'/>
          <img src={fullStar} alt="" className='star' />
          <img src={fullStar} alt="" className='star'/>
          <img src={fullStar} alt="" className='star'/>
          <img src={halfStar} alt="" className='star'/>
        </div>
        <div></div>
    </div>
  );
}
