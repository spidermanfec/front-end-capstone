import React, { useState } from 'react';
import Aentry from './aentry.jsx';

function Alist({ answers }) {
  const answersList = Object.values(answers);
  const [loadableAs, setLoadableAs] = useState(2);
  const loadableAsArray = [];

  if (answersList.length > 0) {
    for (let i = 0; i < loadableAs; i++) {
      loadableAsArray.push(<Aentry answer={answersList[i]} key={answersList[i].id} />);
    }
  }
  console.log(loadableAsArray);

  return (
    <div className="aListWrap">
      {loadableAsArray}
      <div>
        <input className="abutton" type="button" value="Show more answers..." onClick={() => { setLoadableAs(loadableAs + 2); }} />
      </div>
    </div>
  );
}

export default Alist;
