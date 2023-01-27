import React from 'react';
import Alist from './alist.jsx'

function Qentry({ question }) {
  return (
    <p className="floatingbox">
      {question.question_body}
      <Alist />
    </p>
  )
}

export default Qentry;
