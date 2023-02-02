import axios from 'axios'
import React, { useState } from 'react';
import { useCookies } from "react-cookie";
import Alist from './alist.jsx'

import AEntryModal from './aentrymodal.jsx'


function Qentry({ question, pullQuestions, product_name }) {
  const [cookies, setCookie, removeCookie] = useCookies(['helpfulQIDs']);
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness)
  const [entryModalState, setEntryModalState] = useState(false);
  const [reported, setReported] = useState(false);
  let cookieChecker = cookies.helpfulQIDs.includes(question.question_id);

  const helpfulClick = () => {
    if (!cookieChecker) {
      axios.put(`http://localhost:1100/helpfulq/?question_id=${question.question_id}`) //  Axios get on render. Pass id later.
        .then((results) => {
          if (!cookies.helpfulQIDs) {
            setCookie('helpfulQIDs', [question.question_id], { path: '/' });
            setHelpfulness(helpfulness + 1);
          } else if (!cookieChecker) {
            setCookie('helpfulQIDs', [...cookies.helpfulQIDs, question.question_id], { path: '/' });
            setHelpfulness(helpfulness + 1);
          }
        });
    } else {
      alert("You've already voted this helpful!");
    }
  };

  const clickAddAnswer = () => {
    setEntryModalState(true);
  };

  const reportQuestion = () => {
    axios.put(`http://localhost:1100/reportq/?question_id=${question.question_id}`)
    setReported(true);
  };

  return (
    <div className="aListWrapper">
      <AEntryModal show={entryModalState} setEntryModalState={setEntryModalState} question={question} pullQuestions={pullQuestions} product_name={product_name} />
      <div className="oppositeInline">
        <span className="biggerBolder">
          Q: {question.question_body}
        </span>
        <span className="rightSideQ">
          Helpful?
          <span className="qHelpful" style={{ fontWeight: cookieChecker ? 'bold' : 'normal' }} onClick={helpfulClick} >
            Yes ({helpfulness})
          </span>
          |
          <span className="qAddA" onClick={clickAddAnswer}>
           Add Answer
          </span>
          |
          <span className="qAddA" onClick={reportQuestion}>
            {!reported && <span className="reportAnA" onClick={reportQuestion}>Report</span>}
            {reported && <span className="reportAnA" style={{ fontWeight: 'bold', cursor: 'default' }}>Reported</span>}
          </span>
        </span>
      </div>
      <Alist answers={question.answers}/>
    </div>
  );
}

export default Qentry;
