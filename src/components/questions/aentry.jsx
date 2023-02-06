import Moment from 'moment';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import React, { useState } from 'react';
import ImageModal from './picturemodal.jsx'

function Aentry({ answer }) {
  const [cookies, setCookie] = useCookies(['helpfulQIDs']);
  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);
  const [imageModalState, setImageModalState] = useState(false);
  const [modalImage, setModalImage] = useState('');
  const [reported, setReported] = useState(false);
  const hasVoted = cookies.helpfulQIDs?.includes(answer.id);

  const handleHelpfulClick = () => {
    if (!hasVoted) {
      axios.put(`http://localhost:1100/helpfula/?answer_id=${answer.id}`)
        .then(() => {
          setCookie('helpfulQIDs', [...cookies.helpfulQIDs, answer.id], { path: '/' });
          setHelpfulness(helpfulness + 1);
        });
    } else {
      alert("You've already voted this helpful!");
    }
  };

  const handleReportAnswer = () => {
    axios.put(`http://localhost:1100/reporta/?answer_id=${answer.id}`);
    setReported(true);
  };

  const handleShowImageModal = (e) => {
    setImageModalState(true);
    setModalImage(e.target.currentSrc);
  };

  return (
    <div className="aListEntry">
      <ImageModal show={imageModalState} url={modalImage} setImageModalState={setImageModalState} />
      <b>A: </b>
      {answer.body}
      <div>
        {answer.photos?.map((item, index) => (
          <img src={item} key={index} className="croppedPic" onClick={handleShowImageModal} />
        ))}
      </div>
      <p className="smallText">
        by {answer.answerer_name === 'Seller' ? <b>Seller</b> : answer.answerer_name}, {Moment.utc(answer.date).format("MMM Do, YYYY")} | Helpful?
        <span className="qHelpful" onClick={handleHelpfulClick} style={{ fontWeight: hasVoted ? 'bold' : 'normal' }} >
          Yes ({helpfulness})
        </span>
        |
        {!reported ? (
          <span className="reportAnA" onClick={handleReportAnswer}>Report</span>
        ) : (
          <span className="reportAnA" style={{ fontWeight: 'bold', cursor: 'default' }}>Reported</span>
        )}
      </p>
    </div>
  );
};

export default Aentry;