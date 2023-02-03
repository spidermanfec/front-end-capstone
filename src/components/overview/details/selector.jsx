import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Selector({ items, itemsInfo, itemStyles, handleStyleSelect, styles, selectedStyle }) {
  const [currentThumbnail, setCurrentThumbnail] = useState(0);
  const [currentSelected, setCurrentSelected] = useState(itemStyles.results[0].style_id)

  let temp = selectedStyle || itemStyles.results[0].style_id

  console.log(temp);

  return (
    <div className="styles">
      <div className="styletext">STYLE &#5171; {styles.name}</div>
      <p className="selectorGrid">
        {itemStyles.results.map((itemStyle, index) => {
          console.log(itemStyle);
          console.log(selectedStyle)
          console.log(itemStyle.photos.indexOf(itemStyle.photos[index]));
          return <button className={itemStyle.photos[currentThumbnail].thumbnail_url === itemStyle.photos[index].thumbnail_url ? 'selecStyleon' : 'selecStyleoff '} onClick={() => setCurrentThumbnail(itemStyle.photos.indexOf(itemStyle.photos[index]))} onClick={(e) => handleStyleSelect(e)}
          type="submit" value={itemStyle.style_id} key={index}>
            <div className={itemStyle.style_id === temp && index ? 'cheka' : null}></div>
            <img className="thumbnail"
              src={itemStyle.photos[currentThumbnail].thumbnail_url}
            />
          </button>;
        })}
      </p>
    </div>
  );
}

export default Selector;
