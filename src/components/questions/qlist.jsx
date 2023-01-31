import React, { useState } from 'react';
import Qentry from './qentry.jsx'
import Search from './search.jsx'

function Qlist({ questionList, setQuestionList, pullQuestions }) {
  const [loadableQs, setLoadableQs] = useState(2); // Use state to hold number of questions.
  const loadableQsArray = [];

  if (questionList.length > 0) { // Check if questions empty, load # of react comps in an array.
    for (let i = 0; i < loadableQs; i++) {
      loadableQsArray.push(<Qentry question={questionList[i]} key={questionList[i].question_id} pullQuestions={pullQuestions} />);
    }
  }

  const moreQsOnClick = () => { // On click function for more qs
    const difference = questionList.length - loadableQsArray.length;
    if (difference >= 2) { // Adds 2 at a time, or difference to max.
      setLoadableQs(loadableQs + 2);
    } else {
      setLoadableQs(loadableQs + difference);
    }
  };

  return (
    <div className="innerWrap">
      <h2>
        QUESTION & ANSWERS
      </h2>
      <Search questionList={questionList} setQuestionList={setQuestionList} />
      {loadableQsArray}
      <div>
        {(loadableQs < questionList.length) && <input className="qbutton" type="button" value="MORE ANSWERED QUESTIONS" onClick={moreQsOnClick} />}
        <input className="qbutton" type="button" value="ADD A QUESTION +" />
      </div>
    </div>
  );
}

export default Qlist;
