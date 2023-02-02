import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import RelatedCarousel from './relatedCarousel.jsx';
import OutfitCarousel from './outfitCarousel.jsx';
import './related-items-comparison.scss';

export default function Related({ productID, setProduct }) {
  return (
    <div className="related-n-outfits">
      <RelatedCarousel productID={productID} setProduct={setProduct} />
      <br />
      <hr />
      <br />
      <OutfitCarousel productID={productID} setProduct={setProduct} />
    </div>
  );
}

Related.propTypes = {
  productID: PropTypes.string.isRequired,
  setProduct: PropTypes.func.isRequired,
};
