import React, { useState, useEffect } from "react";
import axios from 'axios';

function Modal({ product_id, show, setEntryModalState, pullQuestions, product_name }) {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');
  const [questionAlert, setQuestionAlert] = useState(false);
  const [nicknameAlert, setNicknameAlert] = useState(false);
  const [emailAlert, setEmailAlert] = useState(false);

  if (!show) { return null; }

  const closeModal = () => {
    setQuestion('');
    setEmail('');
    setNickname('');
    setNicknameAlert(false);
    setEmailAlert(false);
    setEntryModalState(false);
    setQuestionAlert(false);
  };

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const onChange = (e) => { // Generic onChange function that handles all state based on form names.
    e.target.name === 'answer' && setQuestion(e.target.value)
    e.target.name === 'nickname' && setNickname(e.target.value)
    e.target.name === 'email' && setEmail(e.target.value)
  };

  const submitQuestion = () => {
    if (!nickname || !email || !question || !isValidEmail(email)) {
      !nickname ? setNicknameAlert(true) : setNicknameAlert(false)
      !email || !isValidEmail(email) ? setEmailAlert(true) : setEmailAlert(false)
      !question ? setQuestionAlert(true) : setQuestionAlert(false)
    } else {
      axios.post(`http://localhost:1100/question/?product_id=${product_id}`, {
        nickname,
        question,
        email,
      })
        .then((results) => {
          closeModal();
          pullQuestions();
        });
    }
  };

  return (
    <div className="modalEntry">
      <span onClick={closeModal} className="modalButton"> X </span>
      <div className="modalTitle">
        Submit your Question<br /><br />
        About {product_name}
      </div>
      <div className="addAnswerEntry">
        {questionAlert && <span className="errorText"> You must enter the following : </span>}
        Question: <textarea className="answerEntry" name="answer" onChange={onChange} placeholder="Your answer..." />
        {nicknameAlert && <span className="errorText"> You must enter the following : </span>}
        Nickname : <input className="answerEntry" name="nickname" onChange={onChange} placeholder="Example: jack543!" />
        {emailAlert && <span className="errorText"> You must enter the valid following : </span>}
        E-mail : <input className="answerEntry" name="email" onChange={onChange} placeholder="Example: jack@email.com" />
        <input className="ebutton" type="button" value="SUBMIT QUESTION" onClick={submitQuestion} />
      </div>
    </div>
  );
}

export default Modal;
