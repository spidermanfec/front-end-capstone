<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Qentry from './qentry.jsx'
import Search from './search.jsx'
import QEntryModal from './qentrymodal.jsx'

function Qlist({ setQCount, qCount, product_id, questionList, setQuestionList, pullQuestions, product_name }) {
  const loadableQsArray = [];
  let minimumQListSize = 0;
  if (qCount > 2) { minimumQListSize = 2; }
  if (qCount <= 2) { minimumQListSize = qCount; }
  const [searchTerm, setSearchTerm] = useState(''); // Hold search term state.
  const [loadableQs, setLoadableQs] = useState(minimumQListSize); // Use state to hold number of questions.
  const [entryModalState, setEntryModalState] = useState(false);

  useEffect(() => {
    setLoadableQs(minimumQListSize);
  }, [minimumQListSize]);

  useEffect(() => {
    if (searchTerm.length === 2) {
      setLoadableQs(2);
    }
  }, [searchTerm.length]);

  if (qCount > 0 && searchTerm.length < 3) { // Check if questions empty, load # of react comps in an array.
    for (let i = 0; i < loadableQs; i++) {
      loadableQsArray.push(<Qentry question={questionList[i]} key={questionList[i].question_id} pullQuestions={pullQuestions} product_name={product_name}/>);
    }
  } else if (qCount > 0 && searchTerm.length >= 3) {
    for (let i = 0; i < qCount; i++) {
      if (questionList[i].question_body.includes(searchTerm)) {
        loadableQsArray.push(<Qentry question={questionList[i]} key={questionList[i].question_id} pullQuestions={pullQuestions} product_name={product_name}/>);
      }
    }
    if (loadableQs !== loadableQsArray.length) {
      setLoadableQs(loadableQsArray.length);
=======
import React, { useState } from 'react';
import Qentry from './qentry.jsx'
import Search from './search.jsx'

function Qlist({ questionList, setQuestionList }) {
  const [loadableQs, setLoadableQs] = useState(2); // Use state to hold number of questions.
  const loadableQsArray = [];
  console.log(questionList); // Console log shows question data.

  if (questionList.length > 0) { // Check if questions empty, load # of react comps in an array.
    for (let i = 0; i < loadableQs; i++) {
      loadableQsArray.push(<Qentry question={questionList[i]} key={questionList[i].question_id} />);
>>>>>>> master
    }
  }

  const moreQsOnClick = () => { // On click function for more qs
<<<<<<< HEAD
    const difference = qCount - loadableQsArray.length;
=======
    const difference = questionList.length - loadableQsArray.length;
>>>>>>> master
    if (difference >= 2) { // Adds 2 at a time, or difference to max.
      setLoadableQs(loadableQs + 2);
    } else {
      setLoadableQs(loadableQs + difference);
    }
  };

<<<<<<< HEAD
  const clickAddQuestion = () => {
    setEntryModalState(true);
  };

  return (
    <div className="innerWrap">
      <QEntryModal show={entryModalState} product_id={product_id} setEntryModalState={setEntryModalState} pullQuestions={pullQuestions} product_name={product_name} />
      <h2>
        QUESTIONS & ANSWERS
      </h2>
      <Search questionList={questionList} setQuestionList={setQuestionList} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="questionList">
        {loadableQsArray}
      </div>
      <div>
        {(loadableQs < questionList.length && searchTerm.length < 3) && <input className="qbutton" type="button" value="MORE QUESTIONS" onClick={moreQsOnClick} />}
        <input className="qbutton" type="button" onClick={clickAddQuestion} value="ADD A QUESTION +" />
=======
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
>>>>>>> master
      </div>
    </div>
  );
}

export default Qlist;
