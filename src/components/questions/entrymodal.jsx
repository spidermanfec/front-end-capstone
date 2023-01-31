import React, { useState } from "react";

function Modal({ show, setEntryModalState }) {
  if (!show) { return null; }

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [answer, setAnswer] = useState('');

  const closeModal = () => {
    setEntryModalState(false);
  };

  const onChange = (e) => { //Generic onChange function that handles all state based on the form names.
    e.target.name === 'answer' && setAnswer(e.target.value)
    e.target.name === 'nickname' && setNickname(e.target.value)
    e.target.name === 'email' && setEmail(e.target.value)
  }

  return (
    <div className="modalEntry">
      <span onClick={closeModal} className="modalButton"> X </span>
      <div className="addAnswerEntry">
        Answer: <textarea className="answerEntry" name="answer" onChange={onChange} placeholder="Your answer..." />
        Nickname : <input className="answerEntry" name="nickname" onChange={onChange} placeholder="Example: jack543!" />
        E-mail : <input className="answerEntry" name="email" onChange={onChange} placeholder="Example: jack@email.com" />
        <input className="ebutton" type="button" value="UPLOAD PHOTOS" onClick={() => console.log('hi')} />
        <input className="ebutton" type="button" value="SUBMIT ANSWER" />
      </div>
    </div>
  );
}

export default Modal;
