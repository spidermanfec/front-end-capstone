/* eslint-disable max-len */
import axios from 'axios';
import React, { useState } from 'react';
import Qlist from './qlist.jsx'
import './questions.scss';

<<<<<<< HEAD
function Questions({ product }) {
  const [questionList, setQuestionList] = useState([]);
  const [qCount, setQCount] = useState(0);
  const product_id = 37360;
  const product_name = 'Super Nice Shoes';

  const pullQuestions = () => { // Used to rerender questions when internal stuff changes, passed as prop.
    axios.get(`http://localhost:1100/questions/?product_id=${product_id}&count=999`)
      .then((results) => {
        const sortedByHelpfulness = results.data.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
        setQCount(results.data.length);
        setQuestionList(sortedByHelpfulness); // Set question list to the result of the axios.
      });
  };

  axios.get(`http://localhost:1100/questions/?product_id=${product_id}&count=999`) //  Axios get on render. Pass id later.
    .then((results) => {
      if (results.data.length > questionList.length) { // Ensure it doesn't loop. vvvv sort by helpful
        const sortedByHelpfulness = results.data.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
        setQCount(results.data.length);
=======
function Questions({ products }) {
  const [questionList, setQuestionList] = useState([]);
  axios.get(`http://localhost:1100/questions/?product_id=37360`) //  Axios get on render. Pass id later.
    .then((results) => {
      if (results.data.length > questionList.length) { // Ensure it doesn't loop. vvvv sort by helpful
        const sortedByHelpfulness = results.data.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
>>>>>>> master
        setQuestionList(sortedByHelpfulness); // Set question list to the result of the axios.
      }
    });

  return ( // Pass resulting questionList as prop to questionList component.
    <div className="outerWrap">
<<<<<<< HEAD
      <Qlist questionList={questionList} product_id={product_id} product_name={product_name} pullQuestions={pullQuestions} setQCount={setQCount} qCount={qCount} />
=======
      <Qlist questionList={questionList} />
>>>>>>> master
    </div>
  );
}

export default Questions;
