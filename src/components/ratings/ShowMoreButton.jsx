import React, { useState, useEffect } from 'react';


  const ShowMoreButton = ({totalReviews, renderedReviews, updateReviewArray}) => {
    var diff = totalReviews.length - renderedReviews.length;

    // console.log('hello from showmore', totalReviews, renderedReviews, updateReviewArray, 'diff', diff)
    const [showButton, setShowButton] = useState(true);
    //show more will control reviewList
      //by default, showmore will

      console.log('hello from showmore', totalReviews.length, renderedReviews.length);
      const toggleButton = () => {
        if (totalReviews.length - renderedReviews.length > 2) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      }
 // <div>{showButton ? <button id="showMore" type="button" onClick={() => {updateReviewArray(); toggleButton()}}>Show More</button> : ''}</div>
      return (

        <div className='reviewListButtons'>
          {showButton ?
          <button className='reviewListButtons' type="button" onClick={() => {updateReviewArray(); toggleButton()}}>Show More</button> : ''}
        </div>
      )
  }


  export default ShowMoreButton;