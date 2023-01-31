/* eslint-disable max-len */
import axios from 'axios';
import React, { useState } from 'react';
import Qlist from './qlist.jsx'
import './questions.scss';

function Questions({ products }) {
  const [questionList, setQuestionList] = useState([]);

  const pullQuestions = () => { // Used to rerender questions when internal stuff changes, passed as prop.
    console.log('PULLING ALL QS');
    axios.get(`http://localhost:1100/questions/?product_id=37360`)
      .then((results) => {
        const sortedByHelpfulness = results.data.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
        setQuestionList(sortedByHelpfulness); // Set question list to the result of the axios.
      });
  };

  axios.get(`http://localhost:1100/questions/?product_id=37360`) //  Axios get on render. Pass id later.
    .then((results) => {
      if (results.data.length > questionList.length) { // Ensure it doesn't loop. vvvv sort by helpful
        const sortedByHelpfulness = results.data.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
        setQuestionList(sortedByHelpfulness); // Set question list to the result of the axios.
      }
    });

  return ( // Pass resulting questionList as prop to questionList component.
    <div className="outerWrap">
      <Qlist questionList={questionList} pullQuestions={pullQuestions} />
    </div>
  );
}

export default Questions;
