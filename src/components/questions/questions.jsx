import axios from 'axios';
import React, { useState } from 'react';
import Qlist from './qlist.jsx'
import './questions.scss';

function Questions({ products }) {
  const [questionList, setQuestionList] = useState([]);
  axios.get(`http://localhost:1100/questions/?product_id=${products[4].id}`)
    .then((results) => {
      if (results.data.length > questionList.length) {
        console.log(results.data);
        setQuestionList(results.data);
      }
    });

  return (
    <div className="floatingbox">
      <Qlist questionList={questionList}/>
    </div>
  );
}

export default Questions;
