import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Selector({ items, itemsInfo, itemStyles, handleStyleSelect }) {
  const [styles, setStyles] = useState([]);

  return (
    <div className="styles">
      <p>
        Styles:
        {itemStyles.results.map((curStyle, index) => {
          // console.log('hereagain: ', curStyle.photos[0].thumbnail_url, index);
          return <button onClick={(e) => handleStyleSelect(e)} type="submit" value={curStyle.style_id} key={index}><img src={curStyle.photos[0].thumbnail_url} width="125"
          height="125"/></button>;
        })}
      </p>
    </div>
  );
}

export default Selector;
