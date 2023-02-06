import React, { useState, useEffect } from 'react';
import Qentry from './qentry.jsx'
import Search from './search.jsx'
import QEntryModal from './qentrymodal.jsx'

function Qlist({ setQCount, qCount, product_id, questionList, setQuestionList, pullQuestions, product_name }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [loadableQs, setLoadableQs] = useState(3);
  const [entryModalState, setEntryModalState] = useState(false);
  const questionListRef = React.useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (questionListRef.current.scrollTop + questionListRef.current.clientHeight >= questionListRef.current.scrollHeight) {
        setLoadableQs(prevState => prevState + 2);
      }
    }
    questionListRef.current.addEventListener('scroll', handleScroll);
    return () => questionListRef.current.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredQuestionList = questionList.filter((question) =>
    !searchTerm || question.question_body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadableQsArray = filteredQuestionList.slice(0, loadableQs).map((question) =>
    <Qentry searchTerm={searchTerm} question={question} key={question.question_id} pullQuestions={pullQuestions} product_name={product_name} />
  );

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
      <div className="questionList" ref={questionListRef}>
        {loadableQsArray}
      </div>
      <input className="qbutton" type="button" onClick={clickAddQuestion} value="ADD A QUESTION +" />
    </div>
  );
}

export default Qlist;