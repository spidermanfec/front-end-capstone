import React, { useState, useEffect, useRef } from 'react';

const Banner = ( {ratingRef, questionsRef, relatedRef }) => {

  const toggleRatings = () => {
    ratingRef.current.scrollIntoView( {behavior: "smooth"});
  };

  const toggleQA = () => {
    questionsRef.current.scrollIntoView( {behavior: "smooth"});
  };

  const toggleRelated = () => {
    relatedRef.current.scrollIntoView( {behavior: "smooth"});
  };

  return (
    <div className="bannercontainer">
    <div className="logo">Spiderman Atelier</div>
    <li className="navigator">
      <ul className="cursor" onClick={toggleRatings}>Reviews</ul>
      <ul className="cursor" onClick={toggleQA}>QA</ul>
      <ul className="cursor" onClick={toggleRelated}>Related</ul>
    </li>
    </div>
  )
}

export default Banner;
