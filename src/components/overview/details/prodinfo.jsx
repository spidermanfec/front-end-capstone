import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Ratings from './ratings.jsx'

function Prodinfo({ items, itemsInfo, styles, reviews, ratingRef }) {
  return (
    <aside>
      <p><Ratings reviews={reviews} ratingRef={ratingRef}/></p>
      <small className="category">{itemsInfo.category}</small>
      <h2 className="itemName">{itemsInfo.name}</h2>
      <p className={`sale ${styles.sale_price ? 'sale--on' : 'sale--off'}`}>{styles.sale_price ? <div>{`Sale: $${styles.sale_price}`} <span className="origPrice">{`$${styles.original_price}`}</span></div> : `$${styles.original_price}`}</p>
    </aside>
  );
}

export default Prodinfo;
