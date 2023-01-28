import React from 'react';
import PropTypes from 'prop-types';

export default function OutfitCard({ productID, setOutfitProducts }) {
  return (
    <div className="card outfit-card">+</div>
  );
};

OutfitCard.propTypes = {
  productID: PropTypes.string.isRequired,
  setOutfitProducts: PropTypes.func.isRequired,
};
