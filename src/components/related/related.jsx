import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import RelatedCarousel from './relatedCarousel.jsx';
import OutfitCarousel from './outfitCarousel.jsx';
import ComparisonModal from './comparisonModal.jsx';
import LeftArrow from './leftArrow.jsx';
import RightArrow from './rightArrow.jsx';
import './related-items-comparison.scss';

export default function Related({ productID, setProduct }) {
  const [leftID, setLeftID] = useState('');
  const [rightID, setRightID] = useState('');
  const relatedCarouselRef = useRef(); // React.createRef();
  const outCarouselRef = React.createRef();
  const [hiddenRelArrows, sethiddenRelArrows] = useState(true);
  const [hiddenOutArrows, sethiddenOutArrows] = useState(true);

  useEffect(() => {
    setLeftID(productID);
  }, [productID]);

  return (
    <div className="related-n-outfits">
      <ComparisonModal leftID={leftID} rightID={rightID} setComparison={setRightID} />
      <div
        className="carousel-outer"
        onMouseOver={() => sethiddenRelArrows(false)}
        onMouseOut={() => sethiddenRelArrows(true)}
      >
        <h2>RELATED PRODUCTS</h2>
        <LeftArrow carRef={relatedCarouselRef} areVisible={hiddenRelArrows} />
        <RightArrow carRef={relatedCarouselRef} areVisible={hiddenRelArrows} />
        <RelatedCarousel
          productID={productID}
          setProduct={setProduct}
          setComparison={setRightID}
          carRef={relatedCarouselRef}
          onHover={sethiddenRelArrows}
        />
      </div>
      <div
        className="carousel-outer"
        onMouseOver={() => sethiddenOutArrows(false)}
        onMouseOut={() => sethiddenOutArrows(true)}
      >
        <h2>YOUR OUTFIT</h2>
        <LeftArrow carRef={outCarouselRef} areVisible={hiddenOutArrows} />
        <RightArrow carRef={outCarouselRef} areVisible={hiddenOutArrows} />
        <OutfitCarousel
          productID={productID}
          setProduct={setProduct}
          carRef={outCarouselRef}
          onHover={sethiddenOutArrows}
        />
      </div>
    </div>
  );
}

Related.propTypes = {
  productID: PropTypes.string.isRequired,
  setProduct: PropTypes.func.isRequired,
};
