import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard.jsx';
import SampleData from './SampleData.jsx';

const ReviewList = ({renderedReviews}) => {

  console.log('hello from reviewlist', renderedReviews)


  const reviewMap = renderedReviews.map(review => {
    return <ReviewCard review={review}/>
  });


  return (
    <div id="reviewList">
    {/* <div>{reviewMap}</div> */}
    <div>{reviewMap}</div>
    {/* <div>{showButton ? <button id="showMore" type="button" onClick={() => {showMoreReviews(); toggleButton()}}>Show More</button> : ''}</div> */}
    {/* <button id="showMore" type="button" onClick={() => {showMoreReviews()}}>Show More</button> */}
    </div>
  )
}




export default ReviewList;

