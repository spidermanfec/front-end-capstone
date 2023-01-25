import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';

const root = createRoot(document.getElementById('root'));

// IMPORTING SCSS STYLE:
// IMPORTING IMAGES:
// import hello from './images/helloworld.gif';
// USING IMAGES:
// <img src={hello} alt='hello world animated' />

const App = () => {
<<<<<<< HEAD
  (<h1>Hello World</h1>);
};
=======
  return <h1>Hello World testing here</h1>
}
>>>>>>> 0f1a7044f91f9b85fc6fadec79df74a3bf04773e

root.render(<App />);
