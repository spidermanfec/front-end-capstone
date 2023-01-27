import React from 'react';
import axios from 'axios';

function Gallery({ styles }) {
  console.log(styles);
  return (
    <img
      src={`${styles.photos[0].thumbnail_url}`}
      alt="tempImage"
      width="650"
      height="500"
    />
  );
}

export default Gallery;
