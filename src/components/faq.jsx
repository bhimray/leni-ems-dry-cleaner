import * as React from 'react';
import { questionData } from '../data/faq-question';
import '../styles/faq.css'


const multiObject={};
  const multipleAnswer=(()=>questionData.map((data,i)=>{
    multiObject[`answer${i}`]= false;
  })
);
multipleAnswer();
console.log("mulitobjectKeys", typeof(multiObject["answer0"]))

const otherAnswer=(actionType)=>{
  const tempObject = multiObject;
  delete tempObject[actionType];

  Object.entries(tempObject).map(item => {
    // console.log("tempObject",item)
    if (item[1]== true){
      tempObject[item[0]] = !item[1]
    }
    // console.log("changed tempObject", tempObject)
  })
  tempObject[actionType]= true;
  console.log("final changed tempObject", tempObject)
  return tempObject;
}
function reducer(state, action) {
  const actionType= action.type;

  switch (action.type) {
    case actionType:
      const alterValue = otherAnswer(actionType);
      console.log("returned alteredValue", alterValue)
      return alterValue;
    default:
      throw new Error();
  }
}

export default function FAQ (){
  console.log(multiObject, "before useReducer")
  const [state, dispatch] = React.useReducer(reducer, multiObject);
  console.log(state.answer0);
  console.log(state.answer1);
  return (
    <div className='faq'>
      <div className='faq-head'>Frequently Asked Questions</div>
      <div className='faq-questions'>
        {
          questionData.map((data, i)=>{
            return(
              <div className='faq-card'>
                <div className='faq-question' onClick={() => dispatch({type: `answer${i}`})}>{data.question}</div>
               </div>
            )
          })
        }
      </div>
      <div>Ask question</div>
    </div>
  );
};
