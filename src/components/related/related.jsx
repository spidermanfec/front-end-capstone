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
  const relCarouselRef = useRef(); // React.createRef();
  const outCarouselRef = useRef(); // React.createRef();
  const [cantScrollRelLeft, setCantScrollRelLeft] = useState(true);
  const [cantScrollRelRight, setCantScrollRelRight] = useState(true);
  const [cantScrollOutLeft, setCantScrollOutLeft] = useState(true);
  const [cantScrollOutRight, setCantScrollOutRight] = useState(true);

  const checkBoundary = (side, element) => {
    const boundary = Math.floor((element.getBoundingClientRect())[side]);
    const check = (side === 'left') ? Math.floor((element.children[0].getBoundingClientRect())[side])
      : Math.floor((element.children[element.children.length - 1].getBoundingClientRect())[side]);
    return (side === 'left') ? (boundary <= check) : (boundary >= check);
  };

  useEffect(() => {
    setLeftID(productID);
    if (relCarouselRef.current) {
      relCarouselRef.current.scrollTo(0, 0);
    }
  }, [productID]);

  return (
    <div className="related-n-outfits">
      <ComparisonModal leftID={leftID} rightID={rightID} setComparison={setRightID} />
      <div
        className="carousel-outer"
        onMouseOver={() => setCantScrollRelRight(checkBoundary('right', relCarouselRef.current))}
      >
        <h2>RELATED PRODUCTS</h2>
        <LeftArrow carRef={relCarouselRef} areVisible={cantScrollRelLeft} />
        <RightArrow carRef={relCarouselRef} areVisible={cantScrollRelRight} />
        <RelatedCarousel
          productID={productID}
          setProduct={setProduct}
          setComparison={setRightID}
          carRef={relCarouselRef}
          checkBoundary={checkBoundary}
          scrollLeft={setCantScrollRelLeft}
          scrollRight={setCantScrollRelRight}
        />
      </div>
      <div
        className="carousel-outer"
        onMouseOver={() => setCantScrollOutRight(checkBoundary('right', outCarouselRef.current))}
      >
        <h2>YOUR OUTFIT</h2>
        <LeftArrow carRef={outCarouselRef} areVisible={cantScrollOutLeft} />
        <RightArrow carRef={outCarouselRef} areVisible={cantScrollOutRight} />
        <OutfitCarousel
          productID={productID}
          setProduct={setProduct}
          carRef={outCarouselRef}
          checkBoundary={checkBoundary}
          scrollLeft={setCantScrollOutLeft}
          scrollRight={setCantScrollOutRight}
        />
      </div>
    </div>
  );
}

Related.propTypes = {
  productID: PropTypes.string.isRequired,
  setProduct: PropTypes.func.isRequired,
};
