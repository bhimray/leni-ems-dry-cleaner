import * as React from 'react';
import referBg from '../images/refer-bg.jpg'
import '../styles/refer.css'
export interface  ReferProps {
}

export default function Refer (props:  ReferProps) {
  return (
    <div className='refer-bg'>
      <div className="refer-head">Our Offers</div>
      <div className='about-head refer-body'>
        <div>
          <div><em>First time customer will get 10% discount</em> on your first order.</div>
          <div className='about-head-service'>Provide us the name of the company/individual while placing order.</div>
        </div>
        <div>
          <div><em>Same day service available for emergency</em></div>
          <div className='about-head-service'> Call us for more information</div>
        </div>
        <div>
          <div>In-house and same day alteration services available</div>
          <div className='about-head-service'>Call us for more information</div>
        </div>
        <div>
          <div>Pick up and delivery options are also available</div>
          <div className='about-head-service'>Drop us your address and additional information.</div>
        </div>
        {/* <img src={referBg} alt="" className='service-image' /> */}
      </div>
    </div>
  );
}
