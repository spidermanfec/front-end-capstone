import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import PlusCard from './plusCard.jsx';
import OutfitCard from './outfitCard.jsx';

export default function OutfitCarousel({ productID, setProduct }) {
  const [outfitProductsIDs, setOutfitProductsIDs] = useState([]);
  const [outfitProducts, setOutfitProducts] = useState([]);

  useEffect(() => {
    axios.get('/outfit-products/', {
      params: {
        q: JSON.stringify(outfitProductsIDs),
      },
    })
      .then((results) => results.data)
      .then((results) => setOutfitProducts(results))
      .catch((err) => console.log(err));
  }, [outfitProductsIDs]);

  const notInList = (id) => (
    outfitProductsIDs.indexOf(id)
  );

  const removeProduct = (id) => {
    setOutfitProductsIDs((oldIDs) => oldIDs.filter((oID) => oID !== id));
  };

  return (
    <div className="card-carousel outfit-products">
      <PlusCard
        productID={productID}
        setOutfitProductsIDs={setOutfitProductsIDs}
        notInList={notInList}
      />
      {outfitProducts.map((productInfo) => (
        <OutfitCard
          id={`${productInfo.id}`}
          category={productInfo.category}
          name={productInfo.name}
          defaultPrice={productInfo.default_price}
          setOutfitProductsIDs={removeProduct}
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
