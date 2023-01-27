import React from 'react';
import Aentry from './aentry.jsx';

function Alist({ answers }) {
  return (
    <div className="aListWrap">
      <p>
        {Object.values(answers).map((item) => <Aentry answer={item} key={item.id} />)}
      </p>
    </div>
  );
}

export default Alist;
