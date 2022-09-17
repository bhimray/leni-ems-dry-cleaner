import * as React from 'react';
import { questionData } from '../data/faq-question';
import '../styles/faq.css'


const multiObject={};
const multipleAnswer=(()=>questionData.map((data,i)=>{
  multiObject[`answer${i}`]= false;
  console.log("multipleAnswer", multiObject)
})
);
multipleAnswer();
console.log("mulitobjectKeys", typeof(multiObject["answer0"]))

const otherAnswer=(actionType)=>{
  const tempObject = multiObject;
  delete tempObject[actionType];

  Object.entries(tempObject).map(item => {
    // console.log("tempObject",item)
    if (item[1]=== true){
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
const myRef= React.createRef()//always create outside the function

const FAQ = (myRef4)=>{
  console.log(multiObject, "before useReducer")
  const [state, dispatch] = React.useReducer(reducer, multiObject);
  // console.log("state",state);
  console.log("myRef4", myRef4.refe)
  
  
  return (
    <div  className='faq' >
      <div className='faq-head'>Frequently Asked Questions</div>
      <div className='faq-questions'>
        {
          questionData.map((data, i)=>{
            const alterAnswer= `answer${i}`
            const boolValue = state[alterAnswer]
            console.log(state[alterAnswer],`true or false for ${i} times`)
            return(
              <div className='faq-card' key={i} onClick={() =>dispatch({type: `answer${i}`})}>
                <div className={'faq-question'}>{data.question}</div>
                {console.log("inside return", typeof(boolValue))}
                <div className={boolValue ? "faq-answer-show" : "faq-answer-show faq-answer-hide"} key={i}>{data.answer}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default FAQ;
