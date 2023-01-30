import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Prodinfo from './details/prodinfo.jsx';
import Gallery from './details/gallery.jsx';
import Cart from './details/cart.jsx';
import styles from '../../../productstyles.json';
import products from '../../../products.json';
import productinfo from '../../../productinfo.json';
import Selector from './details/selector.jsx';
import './overview.scss';

function Overview() {
  const [items, setItems] = useState([]);

  const [itemsInfo, setItemsInfo] = useState([]);

  const [itemStyles, setItemStyles] = useState([]);

  const [loading, setLoading] = useState(true);

  const [selectedStyle, setSelectedStyle] = useState();

  const handleStyleSelect = (e) => {
    e.preventDefault();
    let select = e.currentTarget.value;
    console.log(select);
    setSelectedStyle(Number(select));
  };

  // const [display, setDisplay] = React.useState([selectedProd1, styles.results[0]]);

  useEffect(() => {
    Promise.all([axios.get('/products'), axios.get('/productsid'), axios.get('productstyles')]).then(([resProds, resIds, resStyles]) => {
      setItems(resProds.data);
      setItemsInfo(resIds.data);
      setItemStyles(resStyles.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (<div>Loading item</div>);
  }

  const tester = () => {
    for (let i = 0; i < itemStyles.results.length; i++) {
      if (itemStyles.results[i].style_id === selectedStyle) {
        return itemStyles.results[i];
      }
    }
  }

  console.log(tester());

  return (
    <div className="overviewContainer">
      <div className="gallery"><Gallery styles={selectedStyle === undefined ? itemStyles.results[0] : tester()}/></div>
      <div className="prodInfo">
        <Prodinfo items={items} itemsInfo={itemsInfo} itemStyles={itemStyles} styles={selectedStyle === undefined ? itemStyles.results[0] : tester()}/>
        <section><Selector items={items} itemsInfo={itemsInfo} itemStyles={itemStyles} handleStyleSelect={handleStyleSelect} /></section>
        <section className="prodInfo"><Cart styles={selectedStyle === undefined ? itemStyles.results[0] : tester()} selectedStyle={selectedStyle} itemStyles={itemStyles}/></section>
      </div>
    </div>
  );
}

export default Overview;
