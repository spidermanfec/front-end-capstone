import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function LeftArrow({ carRef, areVisible }) {
  const buttonPress = () => {
    // console.log(carRef.current);
    carRef.current.scrollLeft += -200;
  };

  const style = {
    display: areVisible ? 'none' : 'block',
  };

  return (
    <i
      className="fa-solid fa-arrow-left carousel-nav left-arrow"
      role="button"
      tabIndex="0"
      alt="scroll left"
      style={style}
      onClick={(e) => {
        e.stopPropagation();
        buttonPress();
      }}
      onKeyPress={(e) => {
        e.stopPropagation();
        buttonPress();
      }}
      ref={carRef}
    />
  );
}
