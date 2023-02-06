import React, { useState, useEffect } from 'react';

var radioButtonResultsObj = {};

function ReviewForm({toggleAddReviewForm}) {

  const [showDisplay, setShowDisplay] = useState(false);
  const [display, setDisplay] = useState('modal')
  const [starDisplay, setStarDisplay] = useState(starMap);
  const [initialRender, setInitialRender] = useState(true);

  if (initialRender) {
    var starMap = [];
    for (var i = 1; i <= 5; i++) {
      // var id = i;
      starMap.push(<i id={i} onClick={(e) => {reRenderStars(e.target.id)}}className="fa-regular fa-star"></i>)
    }
    setStarDisplay(starMap);
    setInitialRender(false);

    // let radioButtons = renderRadioButtons();
    // setRadioButtons(radioButtons);
  }

  const toggleDisplay = () => {
    if (display === 'modal') {
      setDisplay('none');
    } else {
      setDisplay('modal');
    }
  }

  const reRenderStars = (id) => {

    //if id input is equal to, or before
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
  }

  //everything else States
  const [stars, setStars] = useState('');
  const [revSum, setRevSum] = useState('');
  const [revBody, setRevBody] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [reqChars, setReqChars] = useState(`Minimum required characters left: 50`);

  const stateTracker = (e, state) => {
    if (state ===  'revBody') {
      console.log('revbody', e.target.value);
      setRevBody(e.target.value)
      if (revBody.length >= 50) {
        setReqChars('Minimum reached')
      } else {
        setReqChars(`Minimum required characters left: ${50 - revBody.length}`);
      }
    }
    if (state === 'nickname') {
      setNickname(e.target.value);
    }
    if (state === 'email') {
      setEmail(e.target.value);
    } else {
      setRevSum(e.target.value);
      console.log('revSum', e.target.value);
    }

  }

  const checkSubmit = () => {
    //check for blanks
    if ((stars || revSum || revBody || nickname || email || rec || size || width || comfort || quality ||length || fit) === '') {
      //make alert
      console.log('please make sure mandatory fields are filled out')
    }
    if (revBody.length < 50) {
      //alert
      console.log('review must be a least 50 chars');
    } if (email.indexOf('@') === -1) {
      console.log('email must be in the corerct format')
    }
    //placeholder for error if images are broken
    var objToSend = {};
    objToSend.rating = stars;
    objToSend.summary = revSum;
    objToSend.revBody = revBody;
    objToSend.reviewer_name = nickname;
    objToSend.date = new Date();
    objToSend.recommend = radioButtonResultsObj.Recommend;
    objToSend.email = email;
    //add photos later

    console.log('objtosend', objToSend)
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
    console.log('eee', e)
    setRec(e);
  }
  const onChangeFuncSize = (e, characteristic) => {
    var test = ['Size', 'Width', 'Comfort', 'Length', 'Fit', 'Recommend'];
    var currentButton = test[characteristic];
    radioButtonResultsObj[currentButton] = e;

    console.log('e', e, characteristic, radioButtonResultsObj)
    setSize(e);
  }
  const onChangeFuncWidth = (e) => {
    console.log('e', e)
    setWidth(e)
  }
  const onChangeFuncComfort = (e) => {
    console.log('e', e)
    setComfort(e)
  }
  const onChangeFuncQuality = (e) => {
    console.log('e', e)
    setQuality(e)
  }
  const onChangeFuncLength = (e) => {
    console.log('e', e)
    setLength(e)
  }
  const onChangeFuncFit = (e) => {
    console.log('e', e)
    setFit(e)
  }
  const renderRadioButtons = () => {
    var bigDivArray = [];
    var wordsArray =  ['A size too small--½ a size too small--Perfect--½ a size too big--A size too wide',
    'Too narrow--Slightly narrow--Perfect--Slightly wide-Too wide',
    'Uncomfortable--Slightly uncomfortable--Ok--Comfortable--Perfect',
    'Runs Short--Runs slightly short--Perfect--Runs slightly long--Runs long',
    'Runs tight--Runs slightly tight--Perfect--Runs slightly long--Runs long']
    var questionsArray = [
      'How was the Size?', 'How was the Width?', 'How was the Comfort?', 'How was the Length?', 'How was the Fit?'
    ];


    wordsArray.forEach((item, wordsIndex) => {
      var textArray = item.split('--');
      var divArray = textArray.map((item, currentIndex) => {
        var questionText;

        if (currentIndex === 0) {
          questionText = questionsArray[wordsIndex];
        }
        return (
          <div>
            <div>{questionText}</div>
            <span>  <input  onChange={() => {onChangeFuncSize(currentIndex, wordsIndex)}}
            type="radio" id="html" name={wordsIndex} value="HTML"></input>
              <label for="html">{textArray[currentIndex]} </label></span>
          </div>
        )
      })
      bigDivArray.push(divArray)
    })
    return bigDivArray;
  }

  const [radioButtons, setRadioButtons] = useState('');

    return (
  <div className={display}>
      <h5>Review Form</h5>
      <div>{starDisplay}</div>
      <div> {renderRadioButtons()}</div>
      <label>
        Do you recommend this product?
        <span>  <input onChange={() => {onChangeFuncSize(true, 5)}} type="radio" id="html" name="fav_language" value="HTML"></input>
          <label for="html">Yes</label></span>
        <span>  <input onChange={() => {onChangeFuncSize(false, 5)}} type="radio" id="html" name="fav_language" value="HTML"></input>
          <label for="html">No</label></span>
    </label>


    <label>
      Review Summary
      <input onChange={(e) => {stateTracker(e, 'revSummary')}} placeholder='Example: Best purchase ever!' type="text" name="summary" />
    </label>
    <div>
      <label>
        Review Body
        <div>
          <textarea placeholder='Why did you like the product or not?' onChange={(e) => {stateTracker(e, 'revBody') }}></textarea>
          {reqChars}
        </div>
      </label>
    </div>
  <div>  <label for="img">Select image:</label>
  <input type="file" id="img" name="img" accept="image/*"></input>
  <input type="submit"></input></div>

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
  <input onClick={() => {toggleDisplay()}}type="submit" value="Cancel" />
  </div>
      )
}



export default ReviewForm;
