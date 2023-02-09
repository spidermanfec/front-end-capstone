import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import PlusCard from './plusCard.jsx';
import OutfitCard from './outfitCard.jsx';

export default function OutfitCarousel({
  productID, setProduct, carRef, checkBoundary, scrollLeft, scrollRight
}) {
  const [outfitProductsIDs, setOutfitProductsIDs] = useState([]);
  const [outfitProducts, setOutfitProducts] = useState({});

  const getRatingAvg = (id, prod) => {
    let totalReviews = 0;
    let total = 0;
    axios.get(`/reviews/${id}/meta`)
      .then((results) => results.data)
      .then((results) => Object.keys(results).map((rating) => {
        const revCount = Number.parseInt(results[rating], 10);
        const ratingN = Number.parseInt(rating, 10);
        totalReviews += revCount;
        total += (ratingN * revCount);
      }))
      .then(() => { prod[id].rating = Number.parseFloat(total / totalReviews).toFixed(2); });
  };

  useEffect(() => {
    const prod = {};
    Promise.all(outfitProductsIDs.filter((id) => {
      const storedIDData = JSON.parse(localStorage.getItem(id));
      if (storedIDData !== null) {
        prod[id] = storedIDData;
        getRatingAvg(id, prod);
        return false;
      }
      return true;
    }))
      .then((results) => {
        if (results.length === 0) {
          throw('');
        }
        return results;
      })
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
        getRatingAvg(product.product_id, prod);
        return prod[product.product_id].rating;
      }))
      .then(() => {
        (Object.keys(prod)).map((id) => localStorage.setItem(id, JSON.stringify(prod[id])));
      })
      .catch((err) => console.log(err))
      .finally(() => setOutfitProducts(prod));
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
      onScroll={() => {
        scrollLeft(checkBoundary('left', carRef.current));
        scrollRight(checkBoundary('right', carRef.current));
      }}
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
          rating={outfitProducts[cID].rating}
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
