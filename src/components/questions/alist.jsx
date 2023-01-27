import React, { useState } from 'react';
import Aentry from './aentry.jsx';

function Alist({ answers }) {
  const answersList = Object.values(answers);
  const [loadableAs, setLoadableAs] = useState(2);
  const loadableAsArray = [];
  console.log(answers);

  if (answersList.length > 0) {
    for (let i = 0; i < loadableAs; i++) {
      loadableAsArray.push(<Aentry answer={answersList[i]} key={answersList[i].id} />);
    }
  }

  return (
    <div className="aListWrap">
      <p>
        {loadableAsArray}
      </p>
      <div>
        <input type="button" value="MORE ANSWERS" onClick={() => { setLoadableAs(loadableAs + 2); }} />
        <input type="button" value="ADD AN ANSWER +" />
      </div>
    </div>
  );
}

export default Alist;
