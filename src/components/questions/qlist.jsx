import React from 'react';
import Qentry from './qentry.jsx'

function Qlist({ questionList }) {
  return (
    <p className="floatingbox">
      QUESTION LIST:
      {questionList.map((item) => <Qentry question={item} key={item.question_id} />)}
    </p>
  );
}

export default Qlist;
