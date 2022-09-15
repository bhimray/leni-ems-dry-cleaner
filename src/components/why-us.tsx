import * as React from 'react';
import '../styles/why-us.css'
import useScript from '../hooks/useScript';
import Helmet from "react-helmet";
export interface  WhyusProps {
}


export default function Whyus (props:  WhyusProps) {
  const review= useScript("https://cdn.trustindex.io/loader.js?74951f191e8987333d50ce9247")
  console.log("review",review)
  return (
    <div className='customers-review'>
      <div className='customer-review-head'>Customer's Review</div>
      <div className='customer-review-headlines'>Rated 4.5/5 by 1000+ customers</div>
      <Helmet>
        <script defer async src='https://cdn.trustindex.io/loader.js?74951f191e8987333d50ce9247'></script>
      </Helmet>
      <div className='customer-review-see-more'></div>
    </div>
  );
}
