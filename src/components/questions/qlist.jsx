import React from 'react';
import Qentry from './qentry.jsx'
import Search from './search.jsx'

function Qlist({ questionList }) {
  return (
    <div className="innerWrap">
      <h2>
        QUESTION & ANSWERS
      </h2>
      <p>
        <Search />
      </p>
      {questionList.map((item) => <Qentry question={item} key={item.question_id} />)}
      <div>
        <input type="button" value="MORE ANSWERED QUESTIONS" />
        <input type="button" value="ADD A QUESTION +" />
      </div>
    </div>
  );
}

export default Qlist;
