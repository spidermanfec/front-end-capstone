import React from 'react';
import PropTypes from 'prop-types';

export default function RightArrow({ carRef, areVisible }) {
  const buttonPress = () => {
    carRef.current.scrollLeft += 200;
  };

  const style = {
    display: areVisible ? 'none' : 'block',
  };

  return (
    <i
      className="fa-solid fa-angle-right carousel-nav right-arrow"
      role="button"
      tabIndex="0"
      alt="next"
      style={style}
      onClick={(e) => {
        e.stopPropagation();
        buttonPress();}}
      onKeyPress={(e) => {
        e.stopPropagation();
        buttonPress();}}
      ref={carRef}
    />
  );
}
