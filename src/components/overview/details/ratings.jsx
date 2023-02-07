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

  const starRatings = (rating) => {
    const stars = [];
    let ratingcount = rating;
    for (let i = 0; i < 5; i++) {
      console.log(i, ratingcount);
      if (ratingcount === 0) {
        stars.push(<span>☆</span>);
      } else if (ratingcount >= 1) {
        stars.push(<span>★</span>);
        ratingcount --;
      } else if (ratingcount > 0 && ratingcount <= 0.99) {
        stars.push(<img className="stars" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Star_solid_left.svg/15px-Star_solid_left.svg.png"></img>)
        ratingcount = ratingcount - ratingcount;
      }
    }
    return stars;
  }

  const toggleView = () => {
    ratingRef.current.scrollIntoView( {behavior: "smooth"});
  };

  return (
    <>
      {hasReviews && <div className="reviews" onClick={toggleView}>{starRatings(rating)} <a className="reviews1">Read all {reviewCount} reviews </a></div>}
    </>
  );
}

export default Ratings;
