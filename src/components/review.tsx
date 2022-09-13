import * as React from 'react';
import fullStar from '../images/rating-full-star.svg'
import halfStar from '../images/rating-half-star.svg'
import '../styles/review.css'
export interface  ReviewProps {
}

export default function Review (props:  ReviewProps) {
  return (
    <div className='review'>
        <div className='review-head'>Ranked No.1 by customers</div>
        <div className='review-head-2'>in categories Laundry service and dry cleaning</div>
        <div className='stars'>
          <img src={fullStar} alt="rating" className='star'/>
          <img src={fullStar} alt="" className='star' />
          <img src={fullStar} alt="" className='star'/>
          <img src={fullStar} alt="" className='star'/>
          <img src={halfStar} alt="" className='star'/>
        </div>
        <div className='moreReview'>Read more reviews</div>
    </div>
  );
}
