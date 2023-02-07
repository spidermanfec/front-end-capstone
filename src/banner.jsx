import React, { useState, useEffect, useRef } from 'react';

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

  const cartHandler = () => {
    e.preventDefault();
    setCardModal(!cartModal);
    axios.get('/cart')
      .then((result) => {
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
      {/* <div className="cartmodal">
          {cartItems.map((item) => {
            console.log(cartItems);
            {cartItems.length === 0 ? <div>Cart is empty</div> : <div>{item.sku_id, item.count}</div>}
          })}
            </div> <<< in progress >>> */}
    </li>
    </div>
  )
}

export default Banner;
