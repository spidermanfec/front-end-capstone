import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Card({ listType, rerenderEverything }) {
  const [actionBtn, setActionBtn] = useState(null);
  useEffect(() => {
    if (listType === 'related') {
      setActionBtn(<button className="card-btn cmp-btn" type="button">*</button>);
    } else {
      setActionBtn(<button className="card-btn rm-outfit-btn" type="button">x</button>);
    }
  }, []);

  return (
    <div className="card">
      <img className="card-img" src="https://i.ytimg.com/vi/_DEgejL9ap4/maxresdefault.jpg" alt=":(" />
      <button className="card-btn" type="button">*</button>
      <div className="card-body">
        <p>category</p>
        <p>name</p>
        <p>price</p>
        <p>rating</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  listType: PropTypes.string.isRequired,
  rerenderEverything: PropTypes.func.isRequired,
};
