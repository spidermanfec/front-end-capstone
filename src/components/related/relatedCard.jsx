import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardStars from './cardStars.jsx';

export default function RelatedCard({
  id, category, name, defaultPrice, salePrice, photo, rating, setProduct, setComparison,
}) {
  const [photoUrl, setPhotoUrl] = useState('');

  let price = (
    <div className="prod-price">
      <p>{`$${defaultPrice}`}</p>
      <p />
    </div>
  );

  useEffect(() => {
    if (photo === null) {
      setPhotoUrl("https://www.pngitem.com/pimgs/m/370-3708742_memes-cat-sunglasses-cat-meme-hd-png-download.png");
    } else {
      setPhotoUrl(photo);
    }
  }, [photo]);

  useEffect(() => {
    if (salePrice.length > 0) {
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
      <div className="card-img" style={{ backgroundImage: `url('${photoUrl}')` }} />
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
        <CardStars rating={rating} />
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
