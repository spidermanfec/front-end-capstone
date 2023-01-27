import React from 'react';
import axios from 'axios';

function Prodinfo({ display }) {
  console.log(display);
  return (
    <aside>
      <h2>{display.name}</h2>
      <small>{display.category}</small>
      <p>Ratings</p>
      <p>{display.default_price || ('insert sale price heere')}</p>
      <p>{display.description}</p>
      <p>Share on SNS</p>
    </aside>
  );
}

export default Prodinfo;
