import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import RelatedCard from './relatedCard.jsx';

export default function RelatedCarousel({ productID, setProduct }) {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    axios.get(`/products/${productID}/related`)
      .then((results) => setRelatedProducts(results.data))
      .catch((err) => console.log(err));
  }, [productID]);

  return (
    <div className="card-carousel related-products">
      {relatedProducts.map((product) => (
        <RelatedCard
          id={`${product.id}`}
          category={product.category}
          name={product.name}
          defaultPrice={product.default_price}
          setProduct={setProduct}
        />
      ))}
    </div>
  );
}

RelatedCarousel.propTypes = {
  productID: PropTypes.string.isRequired,
  setProduct: PropTypes.func.isRequired,
};
