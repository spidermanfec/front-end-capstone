import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function RelatedCard({
  id, category, name, defaultPrice, salePrice, photo, setProduct, setComparison,
}) {
  let price = (
    <div>
      <p>{defaultPrice}</p>
    </div>
  );

  useEffect(() => {
    if (salePrice.length !== '') {
      price = (
        <div>
          <p><s>{defaultPrice}</s></p>
          <p style={{ color: 'red' }}>{salePrice}</p>
        </div>
      );
    }
  }, []);

  return (
    <div
      className="card"
      onClick={() => setProduct(id)}
      onKeyPress={() => setProduct(id)}
      role="button"
      tabIndex="0"
    >
      <img className="card-img img" src={photo} alt=":(" />
      <button
        className="card-btn rm-outfit-btn"
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setComparison(id);
        }}
      >
        O
      </button>
      <div className="card-body">
        <p>{category}</p>
        <p>{name}</p>
        {price}
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
  salePrice: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  setProduct: PropTypes.func.isRequired,
  setComparison: PropTypes.func.isRequired,
};
