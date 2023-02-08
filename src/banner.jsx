import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const Banner = ( {ratingRef, questionsRef, relatedRef }) => {

  const [cartItems, setCartItems] = useState([]);

  const [cartModal, setCardModal] = useState(false);

  const toggleRatings = () => {
    ratingRef.current.scrollIntoView( {behavior: "smooth"});
  };

  const toggleQA = () => {
    questionsRef.current.scrollIntoView( {behavior: "smooth"});
  };

  const toggleRelated = () => {
    relatedRef.current.scrollIntoView( {behavior: "smooth"});
  };

  const cartHandler = (e) => {
    setCardModal(!cartModal);
    axios.get('/cart')
      .then((result) => {
        console.log(result);
        setCartItems([result.data]);
      });
  };

  return (
    <div className="bannercontainer">
    <div className="logo">Spiderman Atelier</div>
    <li className="navigator">
      <ul className="cursor" onClick={toggleRatings}>Reviews</ul>
      <ul className="cursor" onClick={toggleQA}>QA</ul>
      <ul className="cursor" onClick={toggleRelated}>Related</ul>
      <ul className="cart1" onClick={cartHandler}></ul>
        {cartModal && <div className="cartmodal">
          {cartItems.length === 0 ? <div>Cart is empty</div> : <div>hi there</div>}
          {cartItems.map((item) => {
            console.log(item);
          })}
        </div>}
    </li>
    </div>
  )
}

export default Banner;
