import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function RelatedCard({
  id, category, name, defaultPrice, salePrice, photo, setProduct, setComparison,
}) {
  let price = (
    <div className="prod-price">
      <p>{`$${defaultPrice}`}</p>
      <p />
    </div>
  );

  useEffect(() => {
    if (salePrice.length !== '') {
      price = (
        <div className="prod-price">
          <p><s>{`$${defaultPrice}`}</s></p>
          <p style={{ color: 'red' }}>{`$${salePrice}`}</p>
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
      <div className="card-img" style={{backgroundImage: `url('${photo}')`}} />
      <i
        className="fa-solid fa-magnifying-glass card-btn rm-outfit-btn"
        role="button"
        tabIndex="0"
        alt="compare"
        onClick={(e) => {
          e.stopPropagation();
          setComparison(id);
        }}
        onKeyPress={(e) => {
          e.stopPropagation();
          setComparison(id);
        }}
      />
      <div className="card-body">
        <p className="prod-category">{category}</p>
        <p className="prod-name">{name}</p>
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
