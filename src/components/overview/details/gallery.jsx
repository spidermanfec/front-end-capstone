import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Gallery({ styles, handleStyleSelect, productID }) {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const [imageModal, setImageModal] = useState(false);

  const [expandedModal, setExpandedModal] = useState(false);

  const [scrollView, setScrollView] = useState(styles.photos.length > 7);

  useEffect(() => {
    setCurrentPhoto(0);
  }, [handleStyleSelect, productID]);

  const next = () => {
    setCurrentPhoto((currentPhoto + 1) % styles.photos.length);
  };

  const previous = () => {
    setCurrentPhoto((currentPhoto - 1 + styles.photos.length) % styles.photos.length);
  };

  const toggleModal = () => {
    setImageModal(!imageModal);
  };

  const toggleExpandedModdal = () => {
    setExpandedModal(!expandedModal);
  };

  const closeModal = () => {
    setImageModal(!imageModal);
  }

  const mouseHandler = (e) => {
    console.log(e);
    const loc = e.target.getBoundingClientRect();
    const locx = ((e.pageX - loc.left) / loc.width) * 100;
    const locy = ((e.pageY - loc.top) / loc.height) * 100;
    e.target.style.transformOrigin = `${locx}% ${locy}%`;
  };

  if (styles.photos[currentPhoto].url === null) {
    return <div className="urlpic" onClick={toggleModal}><img className="urlpic" src="https://www.pngitem.com/pimgs/m/370-3708742_memes-cat-sunglasses-cat-meme-hd-png-download.png" /></div>;
  }

  return (
    <>
      <div id="slider">
        {styles.photos.map((photo) => (
          <div key={`${photo.url}`} className={styles.photos[currentPhoto].url === photo.url ? 'fade' : 'slide fade'}>
            {!imageModal && <div className="urlpic" onClick={toggleModal}><img className="urlpic" src={`${photo.url}`} /></div>}
            {imageModal && (
              <div className="modal-lg">
                {/* <div className="expandedView"> */}
                {!expandedModal && <div><img className="img-responsive" src={`${photo.url}`} onClick={toggleExpandedModdal} /><span onClick={closeModal} class="modalButton"> <img src="https://img.icons8.com/ios/50/null/cancel.png"/> </span></div>}
                {expandedModal && <div className="zoomedimage"><div className="img-larger"><img className="zoom" onMouseMove={mouseHandler} src={`${photo.url}`} onClick={toggleExpandedModdal} /></div></div>}
                {/* </div> */}
                {!expandedModal && <div id="modalimagelist">
                  {styles.photos.map((photo) => (
                    <>
                      {' '}
                      {imageModal & !expandedModal && (
                        <span key={`${photo.url}`} className={styles.photos[currentPhoto].url === photo.url ? 'modalimage present' : 'modalimage'} onClick={() => setCurrentPhoto(styles.photos.indexOf(photo))}>
                          <img className="modallistpic" src={`${photo.url}`} />
                        </span>
                      )}
                    </>
                  ))}
                </div>}
                {imageModal & !expandedModal && <button onClick={previous} className="modalprevious">&#171;</button>}
                {imageModal & !expandedModal && <button onClick={next} className="modalnext">&#187;</button>}
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
      {scrollView && <div id="imagelist">
        {styles.photos.map((photo) => (
          <>
            {' '}
            {!imageModal && (
              <span key={`${photo.url}`} className={styles.photos[currentPhoto].url === photo.url ? 'image active' : 'image'} onClick={() => setCurrentPhoto(styles.photos.indexOf(photo))} >
                <img className="listpic" src={`${photo.url}`} />
              </span>
            )}
          </>
        ))}
      </div>}
      {!scrollView && <div id="imagelist">
        {styles.photos.map((photo) => (
          <>
            {' '}
            {!imageModal && (
              <span key={`${photo.url}`} className={styles.photos[currentPhoto].url === photo.url ? 'image active' : 'image'} onClick={() => setCurrentPhoto(styles.photos.indexOf(photo))} >
                <img className="listpic" src={`${photo.url}`} />
              </span>
            )}
          </>
        ))}
      </div>}
    </>
  );
}

export default Gallery;
