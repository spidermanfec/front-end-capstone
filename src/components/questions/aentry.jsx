import React from 'react';

function Aentry({ answer }) {
  return (
    <div className="floatingbox">
      A: {answer.body}
    </div>
  );
}

export default Aentry;
