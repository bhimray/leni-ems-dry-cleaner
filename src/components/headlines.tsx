import * as React from 'react';
import '../styles/headlines.css'
export interface  HeadlinesProps {
}

export default function Headlines (props: HeadlinesProps) {
  const [underline, setUnderline] = React.useState(false)

  React.useEffect(()=>{
    if (window.innerWidth<500){
      console.log(window.innerWidth)
      setUnderline(true);
    } else{
      setUnderline(false);
    }
  },[])
  
  return (
    <div className='headlines'>
      <div className='headlines-text'>
        <span className={underline?'stroke-text underline-text-mobile':'stroke-text underline-text'}> Laundry </span>
        <span> and dry Cleaning...</span>
        <span  className={underline?'stroke-text underline-text-mobile':'stroke-text underline-text'}> Customer </span>
        <span> Oriented Service </span>
      </div>
    </div>
  );
}
