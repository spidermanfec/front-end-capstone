import React, { useState } from 'react';
import Aentry from './aentry.jsx';

function Alist({ answers }) {
  let answersList = Object.values(answers); // Convert annoying answers object to array.
  answersList = answersList.sort((a, b) => b.helpfulness - a.helpfulness); // Sort by helpful.
  let minimumAListSize = 0;
  if (answersList.length > 2) { minimumAListSize = 2; }
  if (answersList.length <= 2) { minimumAListSize = answersList.length; }
  const [loadableAs, setLoadableAs] = useState(minimumAListSize); // State to hold count of answers shown. Def 2.
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
        {(loadableAs === answersList.length && loadableAs !== minimumAListSize) && <input className="abutton" type="button" value="Collapse answers..." onClick={() => setLoadableAs(2)} />}
      </div>
    </div>
  );
}

export default Alist;
