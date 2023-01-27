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
          Helpful?
          <span className="qHelpful">
            Yes ({question.question_helpfulness})
          </span>
          |
          <span className="qAddA">
           Add Answer
          </span>
        </span>
      </div>
      <Alist answers={question.answers}/>
    </>
  );
}

export default Qentry;
