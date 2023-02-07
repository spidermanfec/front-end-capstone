import React, { useState } from 'react';
import axios from 'axios';


const ReviewCard = ({review}) => {


  var date = review.date.split('T')[0];
  // console.log('REVIEW FROM REVIEW CARD', review,date)
  var recText = '';
  if (review.recommend) {
   recText = "✔️ I recommend this product"
  }

  var reviewPhotos = review.photos.map(photo => {
    return <img src={photo.url} height="34" />
  })

  var starMap = [];
 for (var i = 1; i <= 5; i++) {
  if (review.rating >= i) {
    starMap.push(<i className="fa-solid fa-star"></i>)
  } else {
    starMap.push(<i className="fa-regular fa-star"></i>)
  }
 }

  const addHelpfulness = (reviewId) => {

    axios.put('/helpfulR').then(results => {
      console.log('successful put, son', results);
    }).catch(err => {
      console.log('god damn err son', err);
    })
    console.log('SUCCESSFUL CLICK')
  }

return (

  <div className="reviewBox">
    <div className="reviewStars">{starMap}</div>
    <div className="reviewNameDate">{review.reviewer_name},  {date}</div>
    <strong className="reviewSummary">{review.summary}</strong>
    <div>{review.body}</div>
    <div>{recText}</div>
    <div>{review.response}</div>
    <div>{reviewPhotos}</div>
    <div className='helpfulDiv' onClick={() => {addHelpfulness}}>Helpful? <u>Yes</u> ({review.helpfulness})</div>
  </div>
)
}


export default ReviewCard;

