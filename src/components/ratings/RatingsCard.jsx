<<<<<<< HEAD
import React from 'react';

const RatingsCard = () => {

return (
  <div>
    placeholder number 4.9
  </div>
=======
import React, { useState, useEffect } from 'react';
import SampleData2 from './SampleData2.jsx';
import SampleDataMeta from './SampleDataMeta.jsx';
import './ratings.css';

function RatingsCard() {
  const [getData, setGetData] = useState(true);
  const [ratingAvg, setRatingAvg] = useState(0);
  const [reviewDistribution, setReviewDistribution] = useState({})
  var data;
  var metaData = SampleDataMeta();
  var metaDataChars = SampleDataMeta().characteristics;
  console.log('metadata', metaData);

  var slidersArray = [];
  for (var key in metaDataChars) {
    var value = (metaDataChars[key].value)
    var sliderText;
    if (key === 'Fit') {
      sliderText = 'A size too small Perfect A size too wide'
    }
    if (key === 'Size') {
      sliderText = 'Too narrow Perfect Too wide'
    }
    if (key === 'Comfort') {
      sliderText = 'Uncomfortable Ok Perfect';
    }
    if (key === 'Quality') {
      sliderText = 'Poor What I expected Perfect'
    }
    if (key === 'Length') {
      sliderText = 'Runs short Perfect Runs long'
    }
    if (key === 'Fit') {
      sliderText = 'Runs tight Perfect Runs long'
    }
    // console.log('sliderval', value);
    slidersArray.push(<div>
      <div>{key}</div>
      <input className='slider' type="range" value={value} max='5' name={key} disabled></input><br></br>
      <label className='sliderText' for={key}>{sliderText}</label>
    </div>)
  }

  if (getData) {
    var ratingsSum = 0;
    var ratingsCount = 0;
    data = SampleData2();
    setGetData(false);
    for (var key in metaData.ratings) {
      ratingsSum += metaData.ratings[key] * (key)
      ratingsCount += metaData.ratings[key] * 1;
    }
    console.log(ratingsSum, ratingsCount);
    var avg = (ratingsSum / ratingsCount).toFixed(2);
    setRatingAvg(avg);
  }


  var starMap = [];
  for (var i = 1; i < 5; i++) {
    var difference = ratingAvg - i;
    if (difference > 1) {
     starMap.push(<i className="fa-solid fa-star"></i>);
   }
    if (difference < 1 && difference > 0) {
     starMap.push(<i id="mutableStar" className="fa-solid fa-star"></i>);
   }
    if (difference < 0) {
    starMap.push(<i className="fa-regular fa-star"></i>);
   }
  }

  var distributionMap = [];
  for (var i = 5; i >= 1; i--) {
    distributionMap.push(
    <div>
      <label for={i}>{i} Stars</label>
      <progress id={i}className="reviewBar" value={metaData.ratings[i] || 0} max='500'> 32% </progress></div>
    )
  }
  var recTotal = (metaData.recommended.false * 1 + metaData.recommended.true * 1)
  var recAvg = ((metaData.recommended.true / recTotal) * 100).toFixed();

// console.log('RATINGAVG', recAvg, metaData.recommended.false, metaData.recommended.true, recTotal);

return (
  <div>
  <div>{ratingAvg}</div>
  <div>{recAvg}% of users recommend this product</div>
  <div>{starMap}</div>
  <div>{distributionMap}</div>

  <div>{slidersArray}</div>
</div>

>>>>>>> master
)

}




export default RatingsCard;


//INPUTS: stars, distribution of ratings, slider ratings,
//header will be a number, to the right filled in stars
//paragraph body when i render the bars,
  //each bar will re render review list
//paragraph body to render the sliders
