import React, { useState, useEffect } from 'react';
import Qentry from './qentry.jsx'
import Search from './search.jsx'
import QEntryModal from './qentrymodal.jsx'

function Qlist({ setQCount, qCount, product_id, questionList, setQuestionList, pullQuestions, product_name }) {
  const loadableQsArray = [];
  let minimumQListSize = 0;
  if (questionList.length > 2) { minimumQListSize = 2; }
  if (questionList.length <= 2) { minimumQListSize = questionList.length; }
  const [loadableQs, setLoadableQs] = useState(minimumQListSize); // Use state to hold number of questions.
  const [entryModalState, setEntryModalState] = useState(false);

  useEffect(() => {
    setLoadableQs(minimumQListSize);
  }, [minimumQListSize]);

  if (questionList.length > 0) { // Check if questions empty, load # of react comps in an array.
    for (let i = 0; i < loadableQs; i++) {
      loadableQsArray.push(<Qentry question={questionList[i]} key={questionList[i].question_id} pullQuestions={pullQuestions} product_name={product_name}/>);
    }
  }

  const moreQsOnClick = () => { // On click function for more qs
    setQCount(qCount + 2);
    const difference = questionList.length - loadableQsArray.length;
    if (difference >= 2) { // Adds 2 at a time, or difference to max.
      setLoadableQs(loadableQs + 2);
    } else {
      setLoadableQs(loadableQs + difference);
    }
  };

  const clickAddQuestion = () => {
    setEntryModalState(true);
  };

  return (
    <div className="innerWrap">
      <QEntryModal show={entryModalState} product_id={product_id} setEntryModalState={setEntryModalState} pullQuestions={pullQuestions} product_name={product_name} />
      <h2>
        QUESTIONS & ANSWERS
      </h2>
      <Search questionList={questionList} setQuestionList={setQuestionList} />
      <div className="questionList">
        {loadableQsArray}
      </div>
      <div>
        {(loadableQs < questionList.length) && <input className="qbutton" type="button" value="MORE QUESTIONS" onClick={moreQsOnClick} />}
        <input className="qbutton" type="button" onClick={clickAddQuestion} value="ADD A QUESTION +" />
      </div>
    </div>
  );
}

export default Qlist;
