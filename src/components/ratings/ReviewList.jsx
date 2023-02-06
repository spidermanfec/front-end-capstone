import React, { useState, useEffect } from 'react';
import ReviewCard from './ReviewCard.jsx';
import SampleData from './SampleData.jsx';

const ReviewList = ({renderedReviews}) => {

  console.log('hello from reviewlist', renderedReviews)
  // const [changingReviewList, setChangingReviewList] = useState(initialReviewList);
  // const [showButton, setShowButton] = useState(true);
  // const reviewArray = SampleData().results;

  // const toggleButton = () => {
  //   if (reviewMap.length - sliceTo > 2) {
  //     setShowButton(true);
  //   } else {
  //     setShowButton(false);
  //   }
  // }

  // const showMoreReviews = () => {
  //   setSliceTo(sliceTo + 2);
  //   setChangingReviewList(initialReviewList);
  // }

  const reviewMap = renderedReviews.map(review => {
    return <ReviewCard review={review}/>
  });
  // const [sliceTo, setSliceTo] = useState(2);
  // const initialReviewList = reviewMap.slice(0, sliceTo);


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


//intake amt of reviews
//render at most 2 reviews,
//if more than 2, render a 'show more' button
//untoggle when all reviews are shown
//implement scroll bar