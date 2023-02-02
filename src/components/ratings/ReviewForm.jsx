import React from 'react';

function ReviewForm() {
    return (
  <div className='modal'>
      <h5>Review Form</h5>
      <div>Stars Placeholder</div>
    <label>
        Do you recommend this product?
        <div>
        <input type="radio" /> Yes
        <div>
        <input type="radio" /> No
        </div>
        </div>
    </label>

    <div>How was the Size?</div>
    <span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">A size too small</label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">½ a size too small</label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Perfect </label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">½ a size too big</label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">A size too wide</label></span><br></br>
<div>How was the Width?</div>
    <span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Too narrow</label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Slightly narrow</label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Perfect </label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Slightly wide</label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Too wide</label></span><br></br>
<div>How was the Comfort?</div>
    <span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Uncomfortable</label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Slightly uncomfortable</label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Ok </label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Comfortable</label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Perfect</label></span><br></br>
<div>How was the Length?</div>
    <span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Runs Short</label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Runs slightly short</label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Perfect </label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Runs slightly long</label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Runs long</label></span><br></br>
<div>How was the Fit?</div>
    <span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Runs tight</label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Runs slightly tight</label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Perfect </label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Runs slightly long</label></span>
<span>  <input type="radio" id="html" name="fav_language" value="HTML"></input>
  <label for="html">Runs long</label></span><br></br>

    <label>
      Review Summary
      <input type="text" name="summary" />
    </label>
    <div>
      <label>
        Review Body
        <div>
          <textarea></textarea>
        </div>
      </label>
    </div>
  <div>  <label for="img">Select image:</label>
  <input type="file" id="img" name="img" accept="image/*"></input>
  <input type="submit"></input></div>

  <label>
      Nickname (mandatory)
      <input type="text" name="nickname" />
    </label>
    <div>
    <label>
      Email (mandatory)
      <input type="text" name="nickname" />
    </label>
    </div>
  <input type="submit" value="Submit" />
  </div>
      )
}



export default ReviewForm;
