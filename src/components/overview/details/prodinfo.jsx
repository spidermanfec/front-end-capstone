import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Prodinfo({ items, itemsInfo, styles}) {

  console.log(itemsInfo);

  return (
    <aside>
      <h2>{itemsInfo.name}</h2>
      <small>{itemsInfo.category}</small>
      <p>Ratings</p>
      <p>{styles.sale_price ? `On Sale: ${styles.sale_price}` : styles.original_price}</p>
      <p>{itemsInfo.description}</p>
      <p>Share on SNS</p>
    </aside>
  );
}

export default Prodinfo;
