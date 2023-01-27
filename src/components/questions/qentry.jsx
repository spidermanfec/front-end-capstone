import React from 'react';
import Alist from './alist.jsx'

function Qentry({ question }) {
  return (
    <div className="floatingbox">
      <div className="oppositeInline">
        <span className="biggerBolder">
          Q: {question.question_body}
        </span>
        <span>
          Helpful? Yes (#) | Add Answer
        </span>
      </div>
      <Alist answers={question.answers}/>
    </div>
  )
}

export default Qentry;
