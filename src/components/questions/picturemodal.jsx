import React from "react";

function Modal({ show, url, setImageModalState }) {
  if (!show) { return null; }

  const closeModal = () => {
    setImageModalState(false);
  };

  return (
    <div className="modalImage">
      <span onClick={closeModal} className="modalButton"> X </span>
      <img src={url} alt="modal img" className="fullPic" />
    </div>
  );
}

export default Modal;
