import React, { useState } from 'react';
import Aentry from './aentry.jsx';

function Alist({ answers }) {
  const answersList = Object.values(answers); // Convert annoying answers object to array.
  const [loadableAs, setLoadableAs] = useState(2); // State to hold count of answers shown. Def 2.
  const loadableAsArray = [];

  if (answersList.length > 0) { // Create array of correct size of react elements to render.
    for (let i = 0; i < loadableAs; i++) {
      loadableAsArray.push(<Aentry answer={answersList[i]} key={answersList[i].id} />);
    }
  }

  return (
    <div className="aListWrap">
      {loadableAsArray}
      <div>
        {(loadableAs < answersList.length) && <input className="abutton" type="button" value="Show more answers..." onClick={() => setLoadableAs(answersList.length)} />}
        {(loadableAs === answersList.length) && <input className="abutton" type="button" value="Collapse answers..." onClick={() => setLoadableAs(2)} />}
      </div>
    </div>
  );
}

export default Alist;
