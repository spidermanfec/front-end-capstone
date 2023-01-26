import React from 'react';
import Qentry from './qentry.jsx'

function Qlist() {
  return (
    <p className="floatingbox">
      QUESTION LIST:
      <Qentry />
      <Qentry />
    </p>
  );
}

export default Qlist;
