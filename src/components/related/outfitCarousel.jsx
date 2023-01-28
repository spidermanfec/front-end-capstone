import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from './card.jsx';
import OutfitCard from './outfitCard.jsx';

export default function OutfitCarousel({ productID }) {
  const [outfitProducts, setOutfitProducts] = useState([]);

  return (
    <div className="card-carousel outfit-products">
      <OutfitCard productID={productID} setOutfitProducts={setOutfitProducts} />
      {outfitProducts.map((productInfo) => (
        <Card
          listType="outfit"
          category={productInfo.category}
          name={productInfo.name}
          defaultPrice={productInfo.default_price}
          onAction={setOutfitProducts}
        />
      ))}
    </div>
  );
};

OutfitCarousel.propTypes = {
  productID: PropTypes.string.isRequired,
};
