import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Ratings from './ratings.jsx'

function Prodinfo({ items, itemsInfo, styles }) {
  return (
    <aside>
      <p><Ratings /></p>
      <small className="category">{itemsInfo.category}</small>
      <h2 className="itemName">{itemsInfo.name}</h2>
      <p className={`sale ${styles.sale_price ? 'sale--on' : 'sale--off'}`}>{styles.sale_price ? `Sale: $${styles.sale_price}` : `$${styles.original_price}`}</p>
    </aside>
  );
}

export default Prodinfo;
