import React from 'react';
import Qentry from './qentry.jsx'
import Search from './search.jsx'

function Qlist({ questionList }) {
  return (
    <div className="floatingbox">
      QUESTION and ANSWERS
      <p>
        <Search />
      </p>
      {questionList.map((item) => <Qentry question={item} key={item.question_id} />)}
      <input type="button" value="MORE ANSWERED QUESTIONS" />
      <input type="button" value="ADD A QUESTION +" />
    </div>
  );
}

export default Qlist;
