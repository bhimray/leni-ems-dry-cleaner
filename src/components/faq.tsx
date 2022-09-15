import * as React from 'react';
import { questionData } from '../data/faq-question';
import '../styles/faq.css'
export interface  FAQProps {
}

export default function FAQ (props:  FAQProps) {
  return (
    <div className='faq'>
      <div>Frequently Asked Questions</div>
      <div className='questions'>
        {
          questionData.map((data)=>{
            return(
              <div className='faq-card'>
                <div className='question'>{data.question}</div>
                <div className='answer'>{data.answer}</div>
            </div>
            )
          })
        }
      </div>
      <div>Ask question</div>
    </div>
  );
}
