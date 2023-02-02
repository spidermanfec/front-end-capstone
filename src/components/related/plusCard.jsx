import React from 'react';
import PropTypes from 'prop-types';

export default function PlusCard({ productID, setOutfitProductsIDs, notInList }) {
  const onAdd = () => {
    if (notInList(productID)) {
      setOutfitProductsIDs((oldIDs) => [...oldIDs, productID]);
    }
  };

  return (
    <div
      className="card outfit-card"
      onClick={onAdd}
      onKeyPress={onAdd}
      role="button"
      tabIndex="0"
    >
      +
    </div>
  );
}

PlusCard.propTypes = {
  productID: PropTypes.string.isRequired,
  setOutfitProductsIDs: PropTypes.func.isRequired,
  notInList: PropTypes.func.isRequired,
};
