import React from 'react';
import Alist from './alist.jsx'

function Qentry({ question }) {
  return (
    <div className="floatingbox">
      Q: {question.question_body}
      <Alist answers={question.answers}/>
    </div>
  )
}

export default Qentry;
