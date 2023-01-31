import React, { useState, useEffect } from "react";

function Modal({ show, setEntryModalState }) {
  if (!show) { return null; }

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [answer, setAnswer] = useState('');
  const [images, setImages] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    if (images.length < 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageUrls(newImageUrls);
    console.log('we did a useeffect');
  }, [images]);

  const closeModal = () => {
    setEntryModalState(false);
  };

  const imageChange = (e) => {
    if (e.target.files.length > 5) {
      alert('Maximum of 5 files');
      e.target.value = '';
    } else {
      setImages([...e.target.files]);
    }
  };

  const onChange = (e) => { //Generic onChange function that handles all state based on the form names.
    e.target.name === 'answer' && setAnswer(e.target.value)
    e.target.name === 'nickname' && setNickname(e.target.value)
    e.target.name === 'email' && setEmail(e.target.value)
  };

  return (
    <div className="modalEntry">
      <span onClick={closeModal} className="modalButton"> X </span>
      <div className="addAnswerEntry">
        Answer: <textarea className="answerEntry" name="answer" onChange={onChange} placeholder="Your answer..." />
        Nickname : <input className="answerEntry" name="nickname" onChange={onChange} placeholder="Example: jack543!" />
        E-mail : <input className="answerEntry" name="email" onChange={onChange} placeholder="Example: jack@email.com" />
        <div className="photoThumbDiv">
          {imageUrls.map((url) => { return <img src={url} className="croppedUpload" alt="upload thumb" />; })}
        </div>
        <input className="ebutton" type="button" value="UPLOAD PHOTOS" onClick={() => console.log(nickname, email, answer)} />
        {images.length < 5 && <input className="ebutton" type="file" multiple accept="image/*" onChange={imageChange} />}
        <input className="ebutton" type="button" value="SUBMIT ANSWER" />
      </div>
    </div>
  );
}

export default Modal;
