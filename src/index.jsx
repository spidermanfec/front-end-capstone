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

<<<<<<< HEAD
const App = () => {
  return (
    <h1>Hello World testing here</h1>
  )
=======
function App() {
  return (
    <div>
      <Overview />
      <Questions />
      <Ratings />
      <Related />
    </div>
  );
>>>>>>> 153210443295f121e63d35ae2a3c7bdc8f644b6f
}

root.render(<App />);
