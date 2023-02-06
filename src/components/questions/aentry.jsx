import Moment from 'moment';
import axios from 'axios';
import React, { useState } from 'react';

function Aentry({ answer }) {
  const [helpfulness, setHelpfulness] = useState(answer.helpfulness);

  const helpfulClick = () => {
    axios.put(`http://localhost:1100/helpfula/?answer_id=${answer.id}`) //  Axios get on render. Pass id later.
      .then((results) => {
        setHelpfulness(helpfulness + 1);
      });
  };

  return (
    <div className="aListEntry">
      <b>A: </b>
      {answer.body}
      <p className="smallText">
        by {answer.answerer_name}, {Moment.utc(answer.date).format("MMM Do, YYYY")} | Helpful?
        <span className="qHelpful" onClick={helpfulClick}>
          Yes ({helpfulness})
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
