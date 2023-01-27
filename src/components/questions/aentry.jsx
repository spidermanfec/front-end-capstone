import React from 'react';

function Aentry({ answer }) {
  return (
    <div className="floatingbox">
      A: {answer.body}
      <p className="smallText">
        by {answer.answerer_name}, {answer.date} | Helpful? Yes (#) | Report
      </p>
    </div>
  );
}

export default Aentry;
