import React, { useState } from 'react';
import { CookiesProvider } from 'react-cookie';
import { createRoot } from 'react-dom/client';
import './index.scss';
import sampleData from '../sampledata.js'
import Overview from './components/overview/overview.jsx';
import Questions from './components/questions/questions.jsx';
import Ratings from './components/ratings/ratings.jsx';
import Related from './components/related/related.jsx';

function App() {
  const [products, setProducts] = useState(sampleData);
  const [productID, setProductID] = useState('37315');
  return (
    <CookiesProvider>
      <div>
        <Overview />
        {/* <Questions products={products} /> */}
        <Ratings />
        <Related productID={productID} setProduct={setProductID} />
      </div>
    </CookiesProvider>
  );
}

export default App;
// <Related />
