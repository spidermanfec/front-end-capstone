import React from 'react';
import Alist from './alist.jsx'

function Qentry({ question }) {
  return (
    <>
      <div className="oppositeInline">
        <span className="biggerBolder">
          Q: {question.question_body}
        </span>
        <span className="rightSideQ">
          Helpful? Yes (#) | Add Answer
        </span>
      </div>
      <Alist answers={question.answers}/>
    </>
  );
}

export default Qentry;
