import React, { useState, useEffect } from 'react';
import axios from 'axios';

var radioButtonResultsObj = {};

function ReviewForm({toggleAddReviewForm, showAddReviewForm, setShowAddReviewForm}) {

  const [showDisplay, setShowDisplay] = useState(false);
  const [display, setDisplay] = useState('modal')
  const [starDisplay, setStarDisplay] = useState(starMap);
  const [initialRender, setInitialRender] = useState(true);
  const [starText, setStarText] = useState('');
  const [imgUrls, setImgUrls] = useState([]);

  if (initialRender) {
    var starMap = [];
    for (var i = 1; i <= 5; i++) {
      // var id = i;
      starMap.push(<i id={i} onClick={(e) => {reRenderStars(e.target.id)}}className="fa-regular fa-star"></i>)
    }
    setStarDisplay(starMap);
    setInitialRender(false);
  }

  const toggleDisplay = () => {
    if (showAddReviewForm) {
      setDisplay('none');
      setShowAddReviewForm(!showAddReviewForm)
    } else {
      setDisplay('modal');
    }
  }

  const reRenderStars = (id) => {
    starTextFunc(id)
  var starMap = [];
  for (var i = 1; i <= 5; i++) {
    if (i <= id) {
      starMap.push(<i id={i} onClick={(e) => {reRenderStars(e.target.id)}}className="fa-solid fa-star"></i>)
    } else {
      starMap.push(<i id={i} onClick={(e) => {reRenderStars(e.target.id)}}className="fa-regular fa-star"></i>)
    }
    setStarDisplay(starMap);
    setStars(id);
   }
  };

  const starTextFunc = (id) => {
    var textArray = ['Poor', 'Fair', 'Average', 'Good', 'Great'];
   setStarText(textArray[id - 1]);
  };

  //everything else States
  const [stars, setStars] = useState('');
  const [revSum, setRevSum] = useState('');
  const [revBody, setRevBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [reqChars, setReqChars] = useState(`Minimum required characters left: 50`);

  const stateTracker = (e, state) => {
    if (state ===  'revBody') {
      setRevBody(e.target.value)
      if (revBody.length >= 50) {
        setReqChars('Minimum reached')
      } else {
        setReqChars(`Minimum required characters left: ${50 - revBody.length - 1}`);
      }
    }
    if (state === 'nickname') {
      setNickname(e.target.value);
    }
    if (state === 'email') {
      setEmail(e.target.value);
    } else {
      setRevSum(e.target.value);
      // console.log('revSum', e.target.value);
    }
  }

  const checkSubmit = () => {
    if ((stars || revSum || revBody || nickname || email || rec || size || width || comfort || quality ||length || fit) === '') {
      alert('Please make sure all mandatory fields are filled out')
          if (revBody.length < 50) {
      alert('Review must be a least 50 characters');
      }
        if (email.indexOf('@') === -1) {
      alert('Email must be in the correct format')
      }
    } else {
      //placeholder for error if images are broken
      var objToSend = {};
      objToSend.rating = stars;
      objToSend.summary = revSum;
      objToSend.body = revBody;
      objToSend.reviewer_name = nickname;
      objToSend.date = new Date();
      objToSend.recommend = radioButtonResultsObj.Recommend;
      objToSend.email = email;
      objToSend.name = nickname;
      // objToSend.photos = photoArrForSubmit;
      objToSend.product_id = 37311
      objToSend.characteristics = {};
      //add characteristics later

        axios.post('/postReview', objToSend).then(results => {
          // console.log('successful post son', results)
          alert('review submitted!');

        }).catch(err => {
          console.log('err posting son',  err);
        });


        alert('review submitted!');
    }


    // console.log('objtosend', objToSend)
  };

  //radio button states
  const [rec, setRec] = useState('');
  const [size, setSize] = useState('');
  const [width, setWidth] = useState('');
  const [comfort, setComfort] = useState('');
  const [quality, setQuality] = useState('');
  const [length, setLength] = useState('');
  const [fit, setFit] = useState('');
  //keep track of form state to handle submit

  const onChangeFuncRec = (e) => {
    setRec(e);
  }

  const onChangeFuncSize = (e, characteristic) => {
    var test = ['Size', 'Width', 'Comfort', 'Length', 'Fit', 'Recommend'];
    var currentButton = test[characteristic];
    radioButtonResultsObj[currentButton] = e;
    setSize(e);
  }

  const renderRadioButtons = () => {
    var bigDivArray = [];
    var wordsArray =  ['A size too small--½ a size too small--Perfect--½ a size too big--A size too wide',
    'Too narrow--Slightly narrow--Perfect--Slightly wide--Too wide',
    'Uncomfortable--Slightly uncomfortable--Ok--Comfortable--Perfect',
    'Runs Short--Runs slightly short--Perfect--Runs slightly long--Runs long',
    'Runs tight--Runs slightly tight--Perfect--Runs slightly long--Runs long'];
    var questionsArray = [
      'How was the Size?', 'How was the Width?', 'How was the Comfort?', 'How was the Length?', 'How was the Fit?'
    ];
    wordsArray.forEach((item, wordsIndex) => {
      var className = '';
      var textArray = item.split('--');
      var divArray = textArray.map((item, currentIndex) => {
        var questionText;
        if (currentIndex === 0) {
          questionText = questionsArray[wordsIndex];
        } else {
          className = 'flexboys';
        }
        return (
          <div className={className}>
            {/* <div>{questionText}</div> */}
            <span>  <input  onChange={() => {onChangeFuncSize(currentIndex, wordsIndex)}}
            type="radio" id="html" name={wordsIndex} value="HTML"></input>
              <label for="html">{textArray[currentIndex]} </label></span>
          </div>
        )
      })
      var text = divArray.slice(0, 1)
      var buttons = divArray.slice();
      var bigDiv = <div>{questionsArray[wordsIndex]}<div className='bigboy'>{buttons}</div>
      </div>

      bigDivArray.push(bigDiv)
    })
    return bigDivArray;
  }

  const [radioButtons, setRadioButtons] = useState('');
  const [fileArray, setFileArray] = useState([]);
  const [imgMap, setImgMap] = useState('');

  const [photoArrForSubmit, setPhotoArrForSubmit] = useState([]);

  const fileHandler = (e) => {
    var UrlArray = [];
    var length = e.target.files.length;
    if (length > 5 || fileArray.length > 5) {
      alert('Maximum of 5 files');
      e.target.value = '';
    } else {
      var img = URL.createObjectURL(e.target.files[length - 1])
      UrlArray.push(img);
      setFileArray([...fileArray, img]);
      // var test = [fileArray, e.target.files[length - 1]]
      // console.log('EEAAEAEA!!', length, fileArray, e.target.files);
      var imgDivs = fileArray.map(item => {
        return (
          <img className='imgDivs' src={item}/>
        )
      })
      var newImg = <img className='imgDivs' src={img}/>
      imgDivs.push(newImg)
      setImgMap(imgDivs);
      // console.log('IMG DIVS', imgDivs)
      setImgUrls(UrlArray);

      var photoArr = UrlArray.map((item, index) => {
        var newItem = item.split('blob:');

        // return ( {
        //   id: index,
        //   url: newItem[1]
        // }
        // )
        return newItem[1];
      });
     setPhotoArrForSubmit(...photoArrForSubmit, photoArr);
    }
  };


    return (
  <div className={display}>
      <h5>Review Form</h5>
      <div>{starDisplay}{starText}</div>
      <div> {renderRadioButtons()}</div>
      <label>
        Do you recommend this product?
        <span>  <input onChange={() => {onChangeFuncSize(true, 5)}} type="radio" id="html" name="fav_language" value="HTML"></input>
          <label for="html">Yes</label></span>
        <span>  <input onChange={() => {onChangeFuncSize(false, 5)}} type="radio" id="html" name="fav_language" value="HTML"></input>
          <label for="html">No</label></span>
    </label><br></br>


    <label>
      Review Summary
      <input onChange={(e) => {stateTracker(e, 'revSummary')}} placeholder='Example: Best purchase ever!' type="text" name="summary" />
    </label>
    <div>
      <label>
        <div>
          <textarea placeholder='Why did you like the product or not?' onChange={(e) => {stateTracker(e, 'revBody') }}></textarea><br></br>
          {reqChars}
        </div>
      </label>
    </div>
  <div>  <label for="img">Select image:</label>
  <input type="file" id="img" name="img" accept="image/*" multiple='true' onChange={fileHandler}></input>
  <div>{imgMap}</div>
  </div>

  <label>
      Nickname (mandatory)
      <input onChange={(e) => {stateTracker(e, 'nickname')}} placeholder='Example: jackson11!' type="text" name="nickname" />
    </label>
    <div>
    <label>
      Email (mandatory)
      <input onChange={(e) => {stateTracker(e, 'email')}}placeholder='Example: jackson11@email.com' type="text" name="nickname" />
    </label>
    </div>
  <input onClick={() => {checkSubmit()}} type="submit" value="Submit" />
  <input onClick={() => {toggleDisplay()}}type="submit" value="Exit" />
  </div>
      )
}



export default ReviewForm;
