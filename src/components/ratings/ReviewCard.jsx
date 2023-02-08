import React, { useState } from 'react';
import axios from 'axios';


const ReviewCard = ({review}) => {

  const reviewID = review.review_id;

  var date = review.date.split('T')[0];
  var splitDate = date.split('-');
  var secondSplitDate = [splitDate[1], splitDate[2], splitDate[0]];
  var joinDate = secondSplitDate.join('-');
  date = joinDate;

  var recText = '';
  if (review.recommend) {
   recText = "✔️ I recommend this product"
  }

  var reviewPhotos = review.photos.map(photo => {
    return <img src={photo.url} height="34" onClick={() => {
      imgModal(photo.url)}}/>
  })

  const [modalImg, setModalImg] = useState('');
  //remember to add to return
  const imgModal = (url) => {
    var xButton = <div className='left' onClick={() => {setModalImg('')}}>X</div>
    var modal = <img  src={url}/>
    var realModal = <div className='reviewModal'>{xButton}{modal}</div>
    setModalImg(realModal);
  }
  var starMap = [];
 for (var i = 1; i <= 5; i++) {
  if (review.rating >= i) {
    starMap.push(<i className="fa-solid fa-star"></i>)
  } else {
    starMap.push(<i className="fa-regular fa-star"></i>)
  }
 }
  const [alreadyClicked, setAlreadyClicked] = useState(false);

  const addHelpfulness = (reviewId) => {
    if (alreadyClicked) {
      alert('You can only vote once per review')
    } else {
      axios.put('/helpfulR', {
        review_id: reviewID
       }
      ).then(results => {
        console.log('successful put, son', results);
      }).catch(err => {
        console.log('god damn err son', err);
      });
      setAlreadyClicked(true);
    }
  }
  const [alreadyReported, setAlreadyReported] = useState(false);

  const reportReview = (reviewId) => {
    if (alreadyReported) {
      alert('You have already reported this review')
    } else {
      axios.put('/reportR', {
        review_id: reviewID
       }
      ).then(results => {
        alert('successful report, son', results);

      }).catch(err => {
        console.log('god damn err in report reviewCard son', err);
      });
      setAlreadyReported(true);
    }
  }


return (

  <div className="reviewBox">
    <div className="reviewStars">{starMap}</div>
    <div className="reviewNameDate">{review.reviewer_name},  {date}</div>
    <div className="reviewSummary">{review.summary}</div>
    <div>{review.body}</div>
    <div>{recText}</div>
    <div>{review.response}</div>
    <div>{reviewPhotos}</div>
    <div>{modalImg}</div>
    <div className='helpfulDiv' >Was this review helpful? <u onClick={() => {addHelpfulness(reviewID)}}>Yes,</u> <u>No</u> ({review.helpfulness}) <u onClick={() => {reportReview(reviewID)}}>Report</u></div>

  </div>
)
}


export default ReviewCard;

