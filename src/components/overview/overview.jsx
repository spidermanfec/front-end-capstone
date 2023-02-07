import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Prodinfo from './details/prodinfo.jsx';
import Gallery from './details/gallery.jsx';
import Cart from './details/cart.jsx';
import Selector from './details/selector.jsx';
import Share from './details/share.jsx';
import Features from './details/features.jsx'
import './overview.scss';

function Overview({ productID, ratingRef }) {
  const [items, setItems] = useState([]);

  const [itemsInfo, setItemsInfo] = useState([]);

  const [itemStyles, setItemStyles] = useState([]);

  const [loading, setLoading] = useState(true);

  const [selectedStyle, setSelectedStyle] = useState();

  const [cartModal, setCardModal] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    Promise.all([axios.get('/products'), axios.get(`/productsid/?product_id=${productID}`), axios.get(`/productstyles/?product_id=${productID}`), axios.get(`/revs/?product_id=${productID}`)]).then(([resProds, resIds, resStyles, resRevs]) => {
      setItems(resProds.data);
      setItemsInfo(resIds.data);
      setItemStyles(resStyles.data);
      setReviews(resRevs.data);
      setLoading(false);
      setSelectedStyle(resStyles.data.results[0].style_id);
    });
  }, [productID]);

  const handleStyleSelect = (e) => {
    e.preventDefault();
    let select = e.currentTarget.value;
    setSelectedStyle(Number(select));
  };

  if (loading) {
    return (<div>Loading item</div>);
  }

  const tester = () => {
    for (let i = 0; i < itemStyles.results.length; i++) {
      if (itemStyles.results[i].style_id === selectedStyle) {
        return itemStyles.results[i];
      }
    }
  };

  return (
    <>
      <div className="overviewContainer">
        <div className="gallery"><Gallery handleStyleSelect={handleStyleSelect} productID={productID} styles={selectedStyle === undefined ? itemStyles.results[0] : tester()} /></div>
        <div className="spacer" />
        <div className="prodInfo">
          <Prodinfo ratingRef={ratingRef} items={items} reviews={reviews.results} itemsInfo={itemsInfo} itemStyles={itemStyles} styles={selectedStyle === undefined ? itemStyles.results[0] : tester()} />
          <section><Selector items={items} productID={productID} itemsInfo={itemsInfo} itemStyles={itemStyles} selectedStyle={selectedStyle} handleStyleSelect={handleStyleSelect} styles={selectedStyle === undefined ? itemStyles.results[0] : tester()} /></section>
          <section className=""><Cart productID={productID} tester={tester} handleStyleSelect={handleStyleSelect} styles={selectedStyle === undefined ? itemStyles.results[0] : tester()} selectedStyle={selectedStyle} itemStyles={itemStyles} /></section>
          <section><Share items={items} itemsInfo={itemsInfo} itemStyles={itemStyles} /></section>
        </div>
      </div>
      <div className="prodfeatures"><Features items={items} itemsInfo={itemsInfo} itemStyles={itemStyles} /></div>
    </>
  );
}

export default Overview;