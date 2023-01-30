import React from "react";

function Modal({ show, url, setModalState }) {
  if (!show) { return null; }

  const closeModal = () => {
    setModalState(false);
  };

  return (
    <div className="modal">
      <span onClick={closeModal} className="modalButton"> X </span>
      <img src={url} alt="modal img" className="fullPic" />
    </div>
  );
}

export default Modal;
