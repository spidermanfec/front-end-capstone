import React from 'react';
import Aentry from './aentry.jsx';

function Alist({ answers }) {
  return (
    <div className="floatingbox">
      {Object.values(answers).map((item) => <Aentry answer={item} key={item.id} />)}
    </div>
  );
}

export default Alist;
