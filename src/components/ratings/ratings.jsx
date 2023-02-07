import React, { useState, useEffect } from 'react';
import RatingsCard from './RatingsCard.jsx';
import SortOptions from './SortOptions.jsx';
import ReviewList from './ReviewList.jsx';
import ReviewForm from './ReviewForm.jsx';
import './ratings.css';
import SampleData from './SampleData.jsx';
import ShowMoreButton from './ShowMoreButton.jsx';
import axios from 'axios';

function Ratings() {
// console.log('showmorebutton', ShowMoreButton)
var reviews = SampleData().results;

var initialReviewList = reviews.slice(0, 2);
const [reviewsLength, setReviewsLength] = useState(2);
const [totalReviews, setTotalReviews] = useState(reviews);
const [renderedReviews, setRenderedReviews] = useState(initialReviewList);
const [showAddReviewForm, setShowAddReviewForm] = useState(false);
const [reGetData, setRegetData] = useState(true);
const [metadata, setMetadata] = useState([]);
const [progressBarFilters, setProgressBarFilters] = useState([]);

const updateReviewArray = () => {

  // setRenderedReviews(totalReviews.slice(0, reviewsLength + 2))
  setRenderedReviews(totalReviews.slice(0, renderedReviews.length + 2))
  // setReviewsLength(reviewsLength + 2);
  setReviewsLength(renderedReviews.length + 2);
  // console.log('reviewsLength', reviewsLength);
}

  if (reGetData) {
    axios.get('/reviews')
      .then(response => {
      console.log('successful get from ratings.jsx, son', response.data);
        //for later, find a way to get rid of the duplicate reviews
      setTotalReviews(response.data.results);
      // initialReviewList = totalReviews.slice(0, 2);
      setRenderedReviews(response.data.results.slice(0, 2));
    })
    .catch(err => {
      console.log('unsucc get from ratings.jsx son', err);
    })
    setRegetData(false);
  }
  console.log('tot revs', totalReviews);



  const onClickProgressBars = (array) => {
    var numArray = array.map(num => {
      return num * 1;
    })
    //render og if no toggles selected
    if (numArray.length === 0) {
      filteredRevs = totalReviews;
    } else {
      var filteredRevs = [];
      totalReviews.map(review => {
        var index = numArray.indexOf(review.rating)
        if (index !== -1) {
          filteredRevs.push(review);
        }
      });
    }
    setRenderedReviews(filteredRevs);
  }


  const sortFunction = (sortOption) => {
    // console.log('sort option', sortOption);
    axios.get('/sortedReviews', {
      params: {
        option: sortOption
      }
    }).then(results => {
      console.log('successful sort get, son', results);
      setRenderedReviews(results.data.results);
    }).catch(err => {
      console.log('fuckin err son', err);
    })
      }



  return (
    <div>
    <h4 className='RnR-header'>Ratings & Reviews</h4>
    <div className='RnR'>
    <RatingsCard onClickProgressBars={onClickProgressBars}/>
    <div className='reviewList'>
    <SortOptions sortFunction={sortFunction}/>
    <ReviewList renderedReviews={renderedReviews}/>
      </div>
      </div>

    {/* <ReviewForm/> */}
      <div className='flex reviewListButtons'>
    <ShowMoreButton totalReviews={totalReviews} renderedReviews={renderedReviews} updateReviewArray={updateReviewArray}/>
     <button className='reviewListButtons' type="button" onClick={() => {setShowAddReviewForm(!showAddReviewForm)}}>Add a Review</button>
     <div className='reviewListButtons'>{showAddReviewForm ? <ReviewForm/> : ''} </div>

    </div>
  </div>
  );
}

//ratings card
//review list card
//write a review button toggle


export default Ratings;