import React from 'react';
import PropTypes from 'prop-types';

export default function OutfitCard({
  id, category, name, defaultPrice, salePrice, photo, setProduct, removeProduct,
}) {
  const displayPrice = () => {
    if (salePrice.length > 0) {
      return (
        <div className="card-price">
          <p><s>{defaultPrice}</s></p>
          <p>{salePrice}</p>
        </div>
      );
    }
    return (
      <div className="card-price">
        <p>{defaultPrice}</p>
      </div>
    );
  };

  return (
    <div
      className="card"
      onClick={() => setProduct(id)}
      onKeyPress={() => setProduct(id)}
      role="button"
      tabIndex="0"
    >
      <div className="card-img" style={{backgroundImage: `url('${photo}')`}} />
      {/* <img className="card-img" src={photo} alt=":(" /> */}
      <i
        className="fa-regular fa-circle-xmark card-btn rm-outfit-btn"
        role="button"
        tabIndex="0"
        alt="remove"
        onClick={(e) => {
          e.stopPropagation();
          removeProduct(id);
        }}
        onKeyPress={(e) => {
          e.stopPropagation();
          removeProduct(id);
        }}
      />
      <div className="card-body">
        <p className="prod-category">{category}</p>
        <p className="prod-name">{name}</p>
        {displayPrice()}
        <p>rating</p>
      </div>
    </div>
  );
}

OutfitCard.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  defaultPrice: PropTypes.string.isRequired,
  salePrice: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  setProduct: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired,
};
