import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Qlist from './qlist.jsx'
import './questions.scss';

function Questions({ productID, product }) {
  const [questionList, setQuestionList] = useState([]);
  const [qCount, setQCount] = useState(0);
  const product_id = productID;
  const product_name = product.name;

  useEffect(() => {
    axios.get(`/questions/?product_id=${product_id}&count=999`)
      .then((results) => {
        const sortedByHelpfulness = results.data.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
        setQCount(results.data.length);
        setQuestionList(sortedByHelpfulness);
      });
  }, [product_id]);

  const pullQuestions = () => {
    axios.get(`/questions/?product_id=${product_id}&count=999`)
      .then((results) => {
        const sortedByHelpfulness = results.data.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
        setQCount(results.data.length);
        setQuestionList(sortedByHelpfulness);
      });
  };

  return (
    <div className="outerWrap">
      <Qlist questionList={questionList} product_id={product_id} product_name={product_name} pullQuestions={pullQuestions} setQCount={setQCount} qCount={qCount} />
    </div>
  );
}

export default Questions;