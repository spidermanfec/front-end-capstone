import React from 'react';
import axios from 'axios';
import Prodinfo from './details/prodinfo.jsx';
import Gallery from './details/gallery.jsx';
import Cart from './details/cart.jsx';
import styles from '../../../productstyles.json';
import products from '../../../products.json';
import productinfo from '../../../productinfo.json';
import './overview.scss';

function Overview() {
  // console.log('style:', styles, 'product:', products, 'productInfo', productinfo);
  const selectedProd1 = products.filter((product) => product.id === productinfo.id);

  const [display, setDisplay] = React.useState([selectedProd1, styles.results[0]]);

  const selectHandler = (e) => {
    const target = e.target.value;
  };

  return (
    <div className="overviewContainer">
      <div className="gallery"><Gallery styles={display[1]}/></div>
      <div className="prodInfo">
        <Prodinfo display={display[0][0]}/>
        {/* <section className="stylesSelector"><Selector /></section> */}
        <section className="prodInfo"><Cart styles={display[1]}/></section>
      </div>
    </div>
  );
}

export default Overview;
