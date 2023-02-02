import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import axios from 'axios';
import RelatedCarousel from './relatedCarousel.jsx';
import OutfitCarousel from './outfitCarousel.jsx';
import ComparisonModal from './comparisonModal.jsx';
import './related-items-comparison.scss';

export default function Related({ productID, setProduct }) {
  const [leftID, setLeftID] = useState('');
  const [rightID, setRightID] = useState('');

  useEffect(() => {
    setLeftID(productID);
  }, [productID]);

  return (
    <div className="related-n-outfits">
      <ComparisonModal leftID={leftID} rightID={rightID} setComparison={setRightID} />
      <RelatedCarousel
        productID={productID}
        setProduct={setProduct}
        setComparison={setRightID}
      />
      <br />
      <br />
      <OutfitCarousel productID={productID} setProduct={setProduct} />
    </div>
  );
}

Related.propTypes = {
  productID: PropTypes.string.isRequired,
  setProduct: PropTypes.func.isRequired,
};
