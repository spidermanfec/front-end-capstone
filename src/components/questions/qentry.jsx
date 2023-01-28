import axios from 'axios'
import React, { useState } from 'react';
import { useCookies } from "react-cookie";
import Alist from './alist.jsx'

function Qentry({ question }) {
  const [cookies, setCookie, removeCookie] = useCookies(['helpfulQIDs']);
  const [helpfulness, setHelpfulness] = useState(question.question_helpfulness)
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

  return (
    <>
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
          <span className="qAddA">
           Add Answer
          </span>
        </span>
      </div>
      <Alist answers={question.answers}/>
    </>
  );
}

export default Qentry;
