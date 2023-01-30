import React from "react";

function Modal({ show, url, setEntryModalState }) {
  if (!show) { return null; }

  const closeModal = () => {
    setEntryModalState(false);
  };

  const onChange = (e) => { //Generic onChange function that handles all state based on the form names.
    e.target.name === 'title' && setTitle(e.target.value)
    e.target.name === 'image_id' && setImageID(e.target.value)
    e.target.name === 'content' && setContent(e.target.value)
    if (e.target.name === 'status') {
      e.target.checked === true && setStatus('draft')
      e.target.checked === false && setStatus('public')
    }
  }

  return (
    <div className="modalEntry">
      <span onClick={closeModal} className="modalButton"> X </span>
      <div className="addAnswerEntry">
        Answer: <textarea className="answerEntry" name="answer" onChange={onChange} placeholder="Your answer..." />
        Nickname : <input className="answerEntry" name="nickname" onChange={onChange} placeholder="Example: jack543!" />
        E-mail : <input className="answerEntry" name="email" onChange={onChange} placeholder="Example: jack@email.com" />
      </div>
    </div>
  );
}

export default Modal;
