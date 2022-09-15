import * as React from 'react';
import '../styles/faq.css'
export interface  FAQProps {
}

export default function FAQ (props:  FAQProps) {
  return (
    <div className='faq'>
      <div>Frequently Asked Questions</div>
      <div className='questions'>
          <div className='question'></div>
          <div className='answer'></div>
      </div>
      <div>Ask question</div>
    </div>
  );
}
