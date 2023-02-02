<<<<<<< HEAD
import React from 'react';
import RatingsCard from './RatingsCard.jsx';
import SortOptions from './SortOptions.jsx';
=======
import React, { useState, useEffect } from 'react';
import RatingsCard from './RatingsCard.jsx';
import SortOptions from './SortOptions.jsx';
import ReviewList from './ReviewList.jsx';
import ReviewForm from './ReviewForm.jsx';
import './ratings.css';
import SampleData from './SampleData.jsx';
import ShowMoreButton from './ShowMoreButton.jsx';

>>>>>>> master
function Ratings() {
// console.log('showmorebutton', ShowMoreButton)
var reviews = SampleData().results;
var initialReviewList = reviews.slice(0, 2);
const [reviewsLength, setReviewsLength] = useState(2);
const [totalReviews, setTotalReviews] = useState(reviews);
const [renderedReviews, setRenderedReviews] = useState(initialReviewList);
const [showAddReviewForm, setShowAddReviewForm] = useState(false);

const updateReviewArray = () => {
  setReviewsLength(reviewsLength + 2);
  setRenderedReviews(reviews.slice(0, reviewsLength))
  console.log('reviewsLength', reviewsLength);
}

// console.log('rednered reviews', renderedReviews, reviewsLength);
  return (
    <div>
<<<<<<< HEAD
    <p> Ratings</p>
    <p></p>
    <SortOptions/>
    <RatingsCard/>

=======
    <h4>Ratings & Reviews</h4>
    <RatingsCard/>
    <SortOptions/>
    <ReviewList renderedReviews={renderedReviews}/>
    {/* <ReviewForm/> */}
    <ShowMoreButton totalReviews={reviews} renderedReviews={renderedReviews} updateReviewArray={updateReviewArray}/>
     <button id="AddReview" type="button" onClick={() => {setShowAddReviewForm(!showAddReviewForm)}}>Add a Review</button>
     <div>{showAddReviewForm ? <ReviewForm/> : ''} </div>
>>>>>>> master
    </div>
  );
}

//ratings card
//review list card
//write a review button toggle


export default Ratings;
