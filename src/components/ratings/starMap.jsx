import React, { useState, useEffect } from 'react';
import axios from 'axios';

const starsMap = (ratingAvg) => {

  console.log('im in starsmap boss', ratingAvg);

  const [initialRender, setInitialRender] = useState(true);
  var metaData = {};



  var endsInZero;
  var stringAvg = JSON.stringify(ratingAvg);
  var splitAtDecimal = stringAvg.split('.');
  var numAfterDecimal = parseInt(splitAtDecimal[1]);
  var cssWidth = numAfterDecimal / 10;

  var halfStarWidth = 35;
  var quarterStarWidth = 31;
  var threeQuarterStarWidth = 39;

  //shift() extra star if avg ends in 0
  if (numAfterDecimal === 0 || splitAtDecimal[1] === undefined) {
    var endsInZero = true;
  } else {
    var endsInZero = false;
  }
  // console.log('im in boss', ratingAvg, endsInZero, splitAtDecimal, numAfterDecimal);

  var mutableStarWidth;
  if (!endsInZero) {
    // console.log('im in boss', ratingAvg, endsInZero, splitAtDecimal, numAfterDecimal);
    if (cssWidth < 1 && cssWidth >= 0.75) {
      mutableStarWidth = threeQuarterStarWidth;
    }
    if (cssWidth < 0.75 && cssWidth >= 0.5) {
      mutableStarWidth = halfStarWidth;
    }
    if (cssWidth < 0.5 && cssWidth >= 0) {
      mutableStarWidth = quarterStarWidth;
    }
  }

  var starMapArray = [];
  for (var i = 1; i <= 5; i++) {
    var difference = ratingAvg - i;

    if (difference < 0 && difference > -1) {
      // console.log('im in mutable boss', i, cssWidth, mutableStarWidth);
      starMapArray.push(<i style={{width: mutableStarWidth}} id="mutableStar" className="fa-solid fa-star"></i>);
    }

    if (difference >= 0) {
      starMapArray.push(<i className="fa-solid fa-star"></i>);
    }

    // if (difference <= -1) {
    //   starMapArray.push(<i className="fa-regular fa-star"></i>);
    // }
  }

  if (!endsInZero) {
    starMapArray.shift();
  }

  return starMapArray;
}

export default starsMap;

//when adding stars to whatever ur doing make sure to change the id of the mutable star so it doesnt clash the stars on the ratings card/ anyone elses stars

// #mutableStar {
//   flex-basis: 15px;
//   float:left;
//   display: flex;

// }

//  #mutableStar:after {
//   /* float:left;
//   display: flex; */
//   /* border-style:double; */
//   font-family: FontAwesome;
//   content: "\f005";
//   /* position: absolute; */
//   left: 0;
//   top: 0;
//   /* width: 25%; */
//   overflow: hidden;
//   color: rgb(0, 0, 0);
// }