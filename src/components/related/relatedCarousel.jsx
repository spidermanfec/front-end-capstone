import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import RelatedCard from './relatedCard.jsx';

export default function RelatedCarousel({ productID, setProduct, setComparison }) {
  const [relatedProductsDetails, setRelatedProductsDetails] = useState({});
  useEffect(() => {
    const prod = {};

    axios.get(`/products/${productID}/related`)
      .then((results) => results.data)
      .then((results) => results.map((id) => axios.get(`products/${id}/details`)))
      .then((results) => Promise.all(results))
      .then((results) => results.map((result) => result.data))
      .then((results) => results.map((result) => {
        prod[result.id] = result;
        return axios.get(`/products/${result.id}/styles`);
      }))
      .then((results) => Promise.all(results))
      .then((results) => results.map((result) => result.data))
      .then((results) => results.map((product) => {
        prod[product.product_id].photo = ((product.results)[0].photos)[0].thumbnail_url;
        prod[product.product_id].sale_price = (product.results)[0].sale_price === null ? '' : (results.results).sale_price;
        return 'hello';// return prod[product.product_id];
      }))
      .then((/* results */) => setRelatedProductsDetails(prod))
      .catch((err) => console.log(err));
  }, [productID]);

  return (
    <div className="card-carousel related-products">
      {(Object.keys(relatedProductsDetails)).map((cID) => (
        <RelatedCard
          id={`${relatedProductsDetails[cID].id}`}
          category={relatedProductsDetails[cID].category}
          name={relatedProductsDetails[cID].name}
          defaultPrice={relatedProductsDetails[cID].default_price}
          salePrice={relatedProductsDetails[cID].sale_price}
          photo={relatedProductsDetails[cID].photo}
          setProduct={setProduct}
          setComparison={setComparison}
        />
      ))}
    </div>
  );
}

RelatedCarousel.propTypes = {
  productID: PropTypes.string.isRequired,
  setProduct: PropTypes.func.isRequired,
  setComparison: PropTypes.func.isRequired,
};
