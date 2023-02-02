import Moment from 'moment';
import axios from 'axios';
<<<<<<< HEAD
import { useCookies } from "react-cookie";
import React, { useState } from 'react';
import ImageModal from './picturemodal.jsx'

function Aentry({ answer }) {
  const [cookies, setCookie, removeCookie] = useCookies(['helpfulQIDs']); // Cookie functionality.
  const [helpfulness, setHelpfulness] = useState(answer.helpfulness); // Helpfulness state.
  const [imageModalState, setImageModalState] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [reported, setReported] = useState(false);
  let cookieChecker = cookies.helpfulQIDs.includes(answer.id); // Check for helpful on current ans.

  const helpfulClick = () => {
    if (!cookieChecker) {
      axios.put(`http://localhost:1100/helpfula/?answer_id=${answer.id}`) //  Axios get on render. Pass id later.
        .then((results) => {
          if (!cookies.helpfulQIDs) {
            setCookie('helpfulQIDs', [answer.id], { path: '/' });
            setHelpfulness(helpfulness + 1);
          } else if (!cookieChecker) {
            setCookie('helpfulQIDs', [...cookies.helpfulQIDs, answer.id], { path: '/' });
            setHelpfulness(helpfulness + 1);
          }
        });
    } else {
      alert("You've already voted this helpful!");
    }
  };

  const reportAnswer = () => {
    axios.put(`http://localhost:1100/reporta/?answer_id=${answer.id}`)
    setReported(true);
  };

  const showImageModal = (e) => {
    setImageModalState(true);
    setModalImage(e.target.currentSrc);
=======
import React, { useState } from 'react';

function Aentry({ answer }) {
  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);

  const helpfulClick = () => {
    axios.put(`http://localhost:1100/helpfula/?answer_id=${answer.id}`) //  Axios get on render. Pass id later.
      .then((results) => {
        setHelpfulness(helpfulness + 1);
      });
>>>>>>> master
  };

  return (
    <div className="aListEntry">
<<<<<<< HEAD
      <ImageModal show={imageModalState} url={modalImage} setImageModalState={setImageModalState}/>
      <b>A: </b>
      {answer.body}
      <div>
        {answer.photos.map((item, index) => { return <img src={item} key={index} className="croppedPic" onClick={showImageModal}/> })}
      </div>
      <p className="smallText">
        by {answer.answerer_name === "Seller" && <b>Seller</b>}{answer.answerer_name !== "Seller" && answer.answerer_name}, {Moment.utc(answer.date).format("MMM Do, YYYY")} | Helpful?
        <span className="qHelpful" onClick={helpfulClick} style={{ fontWeight: cookieChecker ? 'bold' : 'normal' }} >
          Yes ({helpfulness})
        </span>
        |
        {!reported && <span className="reportAnA" onClick={reportAnswer}>Report</span>}
        {reported && <span className="reportAnA" style={{ fontWeight: 'bold', cursor: 'default' }}>Reported</span>}
=======
      <b>A: </b>
      {answer.body}
      <p className="smallText">
        by {answer.answerer_name}, {Moment.utc(answer.date).format("MMM Do, YYYY")} | Helpful?
        <span className="qHelpful" onClick={helpfulClick}>
          Yes ({helpfulness})
        </span>
        |
        <span className="qAddA">
        Report
        </span>
>>>>>>> master
      </p>
    </div>
  );
}

export default Aentry;
