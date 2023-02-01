import React, { useState, useEffect } from 'react';
import Qentry from './qentry.jsx'
import Search from './search.jsx'

function Qlist({ questionList, setQuestionList, pullQuestions }) {
  const loadableQsArray = [];
  let minimumQListSize = 0;
  if (questionList.length > 2) { minimumQListSize = 2; }
  if (questionList.length <= 2) { minimumQListSize = questionList.length; }
  const [loadableQs, setLoadableQs] = useState(minimumQListSize); // Use state to hold number of questions.

  useEffect(() => {
    setLoadableQs(minimumQListSize);
  }, [minimumQListSize]);

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

  const lessQsOnClick = () => {
    setLoadableQs(2);
  };

  return (
    <div className="innerWrap">
      <h2>
        QUESTIONS & ANSWERS
      </h2>
      <Search questionList={questionList} setQuestionList={setQuestionList} />
      <div className="questionList">
        {loadableQsArray}
      </div>
      <div>
        {(loadableQs < questionList.length) && <input className="qbutton" type="button" value="MORE ANSWERED QUESTIONS" onClick={moreQsOnClick} />}
        {(loadableQs >= questionList.length && questionList.length !== minimumQListSize) && <input className="qbutton" type="button" value="COLLAPSE QUESTIONS" onClick={lessQsOnClick} />}
        <input className="qbutton" type="button" value="ADD A QUESTION +" />
      </div>
    </div>
  );
}

export default Qlist;
