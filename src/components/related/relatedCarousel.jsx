import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Card from './card.jsx';

export default function RelatedCarousel({ productID }) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    axios.get(`/products/${productID}/related`)
      .then((results) => setRelatedProducts(results.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card-carousel related-products">
      {relatedProducts.map((product) => (
        <Card
          listType="related"
          category={product.category}
          name={product.name}
          defaultPrice={product.default_price}
        />
      ))}
    </div>
  );
}

RelatedCarousel.propTypes = {
  productID: PropTypes.string.isRequired,
};
