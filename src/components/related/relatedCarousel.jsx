import React from 'react';
import PropTypes from 'prop-types';
import Card from './card.jsx';

const { sampleData } = require('/sampledata.js');

export default function RelatedCarousel({ category }) {
  return (
    <div className="card-carousel related-products">
      {sampleData.filter((prodInfo) => prodInfo.category === category)
        .map((prod) => (
          <Card
            listType="related"
            category={category}
            name={prod.name}
            defaultPrice={prod.default_price}
          />
        ))}
    </div>
  );
};

RelatedCarousel.propTypes = {
  category: PropTypes.string.isRequired,
};
