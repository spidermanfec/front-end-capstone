import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import RelatedCarousel from './relatedCarousel.jsx';
import OutfitCarousel from './outfitCarousel.jsx';
import './related-items-comparison.scss';

export default function Related() {
  return (
    <div className="related-n-outfits">
      <RelatedCarousel productID="37313" />
      <br />
      <hr />
      <br />
      <OutfitCarousel />
    </div>
  );
}

// Related.propTypes = {
//   category: PropTypes.string.isRequired,
// };
