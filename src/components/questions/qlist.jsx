import React, { useState } from 'react';
import Qentry from './qentry.jsx'
import Search from './search.jsx'

function Qlist({ questionList }) {
  const [loadableQs, setLoadableQs] = useState(2);
  const loadableQsArray = [];
  console.log(questionList);
  if (questionList.length > 0) {
    for (let i = 0; i < loadableQs; i++) {
      loadableQsArray.push(<Qentry question={questionList[i]} key={questionList[i].question_id} />);
    }
  }

  return (
    <div className="innerWrap">
      <h2>
        QUESTION & ANSWERS
      </h2>
      <Search />
      <p>
        {loadableQsArray}
      </p>
      <div>
        <input type="button" value="MORE ANSWERED QUESTIONS" onClick={() => { setLoadableQs(loadableQs + 2); }} />
        <input type="button" value="ADD A QUESTION +" />
      </div>
    </div>
  );
}

export default Qlist;
