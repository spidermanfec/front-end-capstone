import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

function Ratings({ reviews, ratingRef }) {
  const [hasReviews, setHasReviews] = useState(true);

  const [rating, setRating] = useState(null);

  const [reviewCount, setReviewCount] = useState(null);

  useEffect(() => {
    if (reviews.length === 0) {
      setHasReviews(false);
    }
    let sum = 0;
    reviews.map((review) => {
      sum += review.rating;
    });
    setRating(sum / reviews.length);
    setReviewCount(reviews.length);
  });

  const toggleView = () => {
    ratingRef.current.scrollIntoView( {behavior: "smooth"});
  };

  return (
    <>
      {hasReviews && <div className="reviews" onClick={toggleView}>Read all {reviewCount} reviews</div>}
    </>
  );
}

export default Ratings;
