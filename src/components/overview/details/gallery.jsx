import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Gallery({ styles, handleStyleSelect }) {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const [imageModal, setImageModal] = useState(false);

  const next = () => {
    setCurrentPhoto((currentPhoto + 1) % styles.photos.length);
  };

  const previous = () => {
    setCurrentPhoto((currentPhoto - 1 + styles.photos.length) % styles.photos.length);
  };

  const toggleModal = () => {
    setImageModal(!imageModal);
  };

  useEffect(() => {
    setCurrentPhoto(0);
  }, [handleStyleSelect]);

  return (
    <>
      <div id="slider">
        {styles.photos.map((photo) => (
          <div key={`${photo.url}`} className={styles.photos[currentPhoto].url === photo.url ? 'fade' : 'slide fade'}>
            {!imageModal && <div className="urlpic" onClick={toggleModal}><img className="urlpic" src={`${photo.url}`} /></div>}
            {imageModal && (
            <div className="modal-lg">
              <img className="img-responsive" src={`${photo.url}`} onDoubleClick={toggleModal} />
              <div id="modalimagelist">
                  {styles.photos.map((photo) => (
                    <>
                      {' '}
                      {imageModal && (
                        <span key={`${photo.url}`} className={styles.photos[currentPhoto].url === photo.url ? 'modalimage present' : 'modalimage'} onClick={() => setCurrentPhoto(styles.photos.indexOf(photo))}>
                          <img className="modallistpic" src={`${photo.url}`} />
                        </span>
                      )}
                    </>
                  ))}
                </div>
              {imageModal && <button onClick={previous} className="modalprevious">&#171;</button>}
              {imageModal && <button onClick={next} className="modalnext">&#187;</button>}
            </div>
            )}
          </div>
        ))}
        {!imageModal && (
        <button onClick={previous} className="previous">
          &#171;
        </button>
        )}
        {!imageModal && (
        <button onClick={next} className="next">
          &#187;
        </button>
        )}
      </div>
      <div id="imagelist">
        {styles.photos.map((photo) => (
          <>
            {' '}
            {!imageModal && (
            <span key={`${photo.url}`} className={styles.photos[currentPhoto].url === photo.url ? 'image active' : 'image'} onClick={() => setCurrentPhoto(styles.photos.indexOf(photo))}>
              <img className="listpic" src={`${photo.url}`} />
            </span>
            )}
          </>
        ))}
      </div>
    </>
  );
}

export default Gallery;
