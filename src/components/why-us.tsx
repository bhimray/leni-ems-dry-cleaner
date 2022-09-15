import * as React from 'react';
import '../styles/why-us.css'
import useScript from '../hooks/useScript';
import Helmet from "react-helmet";
export interface  WhyusProps {
}

export default function Whyus (props:  WhyusProps) {
  useScript("https://cdn.trustindex.io/loader.js?74951f191e8987333d50ce9247", "this-id")
  return (
    <div className='customers-review'>
      <div className="review-head-container">
        <div className='customer-review-head'>Customer's Review</div>
        <div className='customer-review-headline'>Rated 4.5/5 by 100+ customers</div>
      </div>
      <div id="this-id"></div>
      <div className="more-reviews-btn">
        <button className="btn2">More Reviews...</button>
      </div>
    </div>
  );
}
