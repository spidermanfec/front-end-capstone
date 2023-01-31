import React from 'react';
import PropTypes from 'prop-types';

export default function RelatedCard({
  id, category, name, defaultPrice, setProduct,
}) {
  return (
    <div
      className="card"
      onClick={() => setProduct(id)}
      onKeyPress={() => setProduct(id)}
      role="button"
      tabIndex="0"
    >
      <img className="card-img" src="https://i.ytimg.com/vi/_DEgejL9ap4/maxresdefault.jpg" alt=":(" />
      <button
        className="card-btn rm-outfit-btn"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          console.log(id);
        }}
      >
        x
      </button>
      <div className="card-body">
        <p>{category}</p>
        <p>{name}</p>
        <p>{defaultPrice}</p>
        <p>rating</p>
      </div>
    </div>
  );
}

RelatedCard.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultPrice: PropTypes.string.isRequired,
  setProduct: PropTypes.func.isRequired,
  // addToComparison: PropTypes.func.isRequired,
};
