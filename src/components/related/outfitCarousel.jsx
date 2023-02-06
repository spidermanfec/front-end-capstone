import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import PlusCard from './plusCard.jsx';
import OutfitCard from './outfitCard.jsx';

export default function OutfitCarousel({ productID, setProduct, carRef, onHover }) {
  const [outfitProductsIDs, setOutfitProductsIDs] = useState([]);
  const [outfitProducts, setOutfitProducts] = useState({});

  useEffect(() => {
    const prod = {};
    Promise.all(outfitProductsIDs.map((id) => axios.get(`products/${id}/details`)))
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
        // return 'hello';// return prod[product.product_id];
      }))
      .then((/* results */) => setOutfitProducts(prod))
      .catch((err) => console.log(err));
  }, [outfitProductsIDs]);

  const notInList = (id) => (
    outfitProductsIDs.indexOf(id)
  );

  const removeProduct = (id) => {
    setOutfitProductsIDs((oldIDs) => oldIDs.filter((oID) => oID !== id));
  };

  return (
    <div
      className="card-carousel outfit-products"
      ref={carRef}
    >
      <PlusCard
        productID={productID}
        addProduct={setOutfitProductsIDs}
        notInList={notInList}
      />
      {(Object.keys(outfitProducts)).map((cID) => (
        <OutfitCard
          id={`${outfitProducts[cID].id}`}
          category={outfitProducts[cID].category}
          name={outfitProducts[cID].name}
          defaultPrice={outfitProducts[cID].default_price}
          salePrice={outfitProducts[cID].sale_price}
          photo={outfitProducts[cID].photo}
          removeProduct={removeProduct}
          setProduct={setProduct}
        />
      ))}
    </div>
  );
};

OutfitCarousel.propTypes = {
  productID: PropTypes.string.isRequired,
  setProduct: PropTypes.func.isRequired,
};
