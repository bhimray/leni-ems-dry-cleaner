import * as React from 'react';
import '../styles/about.css'
import twelve from '../images/12.svg'
import cloth from '../images/cloth.svg'
import bowlCloth from '../images/bowl-cloth.png'
import receptionist from '../images/receptionist.jpg'
import deliveryVan from '../images/delivery.png'
// import OCTime from './OCTime';
export interface AboutProps {
}


export default function About (props: AboutProps) {
  const [underline, setUnderline] = React.useState(false)

  React.useEffect(()=>{
    if (window.innerWidth<500){
      // console.log(window.innerWidth)
      setUnderline(true);
    } else{
      setUnderline(false);
    }
  },[])
  
  return (
    <div className='about'>
      <div className={underline? 'about-head':' about-head about-head-right'}>
        <div>We clean your laundry and dry cleaning</div>
        <div className='list'>
          <div className='listItem'>
            <img src={twelve} alt="" className='twelve'/>
            <div>12 hours of support</div>
          </div>
          <div className='listItem'>
            <img src={cloth} alt="" className='twelve'/>
            <div>Dedicate for Quality Service</div>
          </div>
        </div>
      </div>
      <div className='about-head'>
        <div>
          <div>Laundry service made for you</div>
          <div className='about-head-service'>We care about your favroite cloth. We provide laundry, dry cleaning and also ironing. we provide clean and quality service so hand us cloth get relax.</div>
        </div>
        <img src={bowlCloth} alt="" className='service-image' />
      </div>
      <div className={underline? 'about-head':' about-head about-head-right'}>
        <div>
          <div>Get our online support</div>
          <div className='about-head-service'>If you want to give us some instructions or need to change some thing. We are always here to listen you and assit you through our online support.</div>
        </div>      
        <img src={receptionist} alt="" className='service-image' />
      </div>
      <div className='about-head'>
        <div>
          <div>Same day pick up</div>
          <div className='about-head-service'>Drop your clothes before 9am and pick up on the same day</div>
        </div>      
        <img src={deliveryVan} alt="" className='service-image' />
      </div>
    </div>
  );
}
