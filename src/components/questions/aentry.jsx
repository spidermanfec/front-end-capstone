import React from 'react';
import Moment from 'moment';

function Aentry({ answer }) {
  return (
    <div className="aListEntry">
      <b>A: </b>
      {answer.body}
      <p className="smallText">
        by {answer.answerer_name}, {Moment.utc(answer.date).format("MMM Do, YYYY")} |
        <span className="qHelpful">
        Helpful? Yes ({answer.helpfulness})
        </span>
        |
        <span className="qAddA">
        Report
        </span>
      </p>
    </div>
  );
}

export default Aentry;
