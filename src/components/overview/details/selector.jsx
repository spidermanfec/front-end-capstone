import React, {useState} from 'react';
import axios from 'axios';

function Selector({ itemStyles, handleStyleSelect, styles, selectedStyle }) {
  const [currentThumbnail, setCurrentThumbnail] = useState(0);
  const temp = selectedStyle || itemStyles.results[0].style_id

  console.log(temp);

  return (
    <div className="styles">
      <div className="styletext">STYLE &#5171; {styles.name}</div>
      <p className="selectorGrid">
        {itemStyles.results.map((itemStyle, index) => {
          return <button className={itemStyle.photos[currentThumbnail].thumbnail_url === itemStyle.photos[index].thumbnail_url ? 'selecStyleon' : 'selecStyleoff '} onClick={() => setCurrentThumbnail(itemStyle.photos.indexOf(itemStyle.photos[index]))} onClick={(e) => handleStyleSelect(e)}
            type="submit" value={itemStyle.style_id} key={index}>
            <div className='layover'>
              {itemStyle.style_id === temp && '✅'}
            </div>
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