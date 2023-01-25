import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import Overview from './components/overview/overview.jsx';
import Questions from './components/questions/questions.jsx';
import Ratings from './components/ratings/ratings.jsx';
import Related from './components/related/related.jsx';

const root = createRoot(document.getElementById('root'));

// IMPORTING SCSS STYLE:
// IMPORTING IMAGES:
// import hello from './images/helloworld.gif';
// USING IMAGES:
// <img src={hello} alt='hello world animated' />

function App() {
  return (
    <div>
      <Overview />
      <Questions />
      <Ratings />
      <Related />
    </div>
  );
}

root.render(<App />);
