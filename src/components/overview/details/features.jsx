import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Ratings from './ratings.jsx'

function Features({ items, itemsInfo, styles}) {
  console.log(itemsInfo);
  return (
    <div className="descriptionWrapper">
        <div className="description">
          <div className="slogantext">{itemsInfo.slogan}</div>
          <div className="descriptiontext">{itemsInfo.description} </div>
          </div>
     <div className="wrapperdivider"></div>
      <div className="wrapperfeatures">
        {itemsInfo.features.map(feature => {
          return <div className="features">&#x2713; {`${feature.value} ${feature.feature}`}</div>
        })}
      </div>
    </div>
  );
}

export default Features;
