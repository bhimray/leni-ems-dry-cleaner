import * as React from 'react';
import '../styles/about.css'
import twelve from '../images/12.svg'
import cloth from '../images/cloth.svg'
import bowlCloth from '../images/bowl-cloth.png'
import receptionist from '../images/receptionist.jpg'
export interface AboutProps {
}

export default function About (props: AboutProps) {
  return (
    <div className='about'>
      <div className='about-head'>
        <div>We clean your laundry and dry cleaning</div>
        <div className='list'>
          <div className='listItem'>
            <img src={twelve} alt="" className='twelve'/>
            <div>12 hours of support</div>
          </div>
          <div className='listItem'>
            <img src={cloth} alt="" className='twelve'/>
            <div>Dedicate for 24/7</div>
          </div>
        </div>
      </div>
      <div className='about-head'>
        <div>Laundry service made for you</div>
        <div className='about-head-service'>We care about your favroite cloth. We provide laundry, dry cleaning and also ironing. we provide clean and quality service so hand us cloth get relax.</div>
        <img src={bowlCloth} alt="" className='service-image' />
      </div>
      <div className='about-head'>
        <div>Get our online support</div>
        <div className='about-head-service'>If you want to give us some instructions or need to change some thing. We are always here to listen you and assit you through our online support.</div>
        <img src={receptionist} alt="" className='service-image' />
      </div>
    </div>
  );
}
