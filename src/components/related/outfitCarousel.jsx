import React from 'react';
// import PropTypes from 'prop-types';
import Card from './card.jsx';
import OutfitCard from './outfitCard.jsx';

const { sampleData } = require('/sampledata.js');

export default function OutfitCarousel() {
  return (
    <div className="card-carousel outfit-products">
      <OutfitCard />
      {sampleData.map((productInfo) => (
        <Card
          listType="outfit"
          category={productInfo.category}
          name={productInfo.name}
          defaultPrice={productInfo.default_price}
        />
      ))}
    </div>
  );
};

// CardCarousel.propTypes = {
// };
