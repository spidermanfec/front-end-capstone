import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardStars from './cardStars.jsx';

export default function OutfitCard({
  id, category, name, defaultPrice, salePrice, photo, rating, setProduct, removeProduct,
}) {
  const [photoUrl, setPhotoUrl] = useState('');

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

  useEffect(() => {
    if (photo === null) {
      setPhotoUrl("https://www.pngitem.com/pimgs/m/370-3708742_memes-cat-sunglasses-cat-meme-hd-png-download.png");
    } else {
      setPhotoUrl(photo);
    }
  }, [photo]);

  return (
    <div
      className="card"
      onClick={() => setProduct(id)}
      onKeyPress={() => setProduct(id)}
      role="button"
      tabIndex="0"
    >
      <div className="card-img" style={{backgroundImage: `url('${photoUrl}')`}} />
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
        <CardStars rating={rating} />
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
