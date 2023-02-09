import React, { useState, useEffect, useRef } from 'react';
import { CookiesProvider } from 'react-cookie';
import axios from 'axios';
import './index.scss';
import sampleData from '../sampledata.js';
import Overview from './components/overview/overview.jsx';
import Questions from './components/questions/questions.jsx';
import Ratings from './components/ratings/ratings.jsx';
import Related from './components/related/related.jsx';
import Banner from './banner.jsx'

function App() {
  const [products, setProducts] = useState(sampleData);
  const [productID, setProductID] = useState('37315');
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`/products/${productID}/details`)
      .then((results) => results.data)
      .then((results) => setProduct(results))
      .catch((err) => console.log(err));
  }, [productID]);

  const ratingRef = useRef();
  const relatedRef = useRef();
  const questionsRef = useRef();

  return (
    <CookiesProvider>
      <div className="wholeAppWrapper">
        <Banner ratingRef={ratingRef} relatedRef={relatedRef} questionsRef={questionsRef}/>
        <Overview productID={productID} setProductID={setProductID} ratingRef={ratingRef} />
        <div className="maxWidth" ref={relatedRef}><Related productID={productID} setProduct={setProductID} /></div>
        <div className="maxWidthQA" ref={questionsRef}><Questions productID={productID} product={product} /></div>
        <div className="maxWidth" ref={ratingRef}><Ratings /></div>
      </div>
    </CookiesProvider>
  );
}

export default App;
