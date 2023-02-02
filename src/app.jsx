import React, { useState } from 'react';
import { CookiesProvider } from 'react-cookie';
import './index.scss';
import sampleData from '../sampledata.js'
import Overview from './components/overview/overview.jsx';
import Questions from './components/questions/questions.jsx';
import Ratings from './components/ratings/ratings.jsx';
import Related from './components/related/related.jsx';

function App() {
  const [products, setProducts] = useState(sampleData);

  return (
    <CookiesProvider>
      <div>
        <Overview />
        <Questions products={products} />
        <Ratings />
      </div>
    </CookiesProvider>
  );
}

export default App;
