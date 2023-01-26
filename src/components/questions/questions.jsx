import React from 'react';
import Search from './search.jsx'
import Qlist from './qlist.jsx'
import './questions.scss';

function Questions() {
  return (
    <div className="floatingbox">
      <Search />
      <Qlist />
    </div>
  );
}

export default Questions;
