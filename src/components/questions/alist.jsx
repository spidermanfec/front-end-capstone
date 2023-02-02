import React, { useState } from 'react';
import Aentry from './aentry.jsx';
<<<<<<< HEAD
function arrayMove(arr, fromIndex, toIndex) {
  var element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
}
=======
>>>>>>> master

function Alist({ answers }) {
  let answersList = Object.values(answers); // Convert annoying answers object to array.
  answersList = answersList.sort((a, b) => b.helpfulness - a.helpfulness); // Sort by helpful.
<<<<<<< HEAD
  for (let i = 0; i < answersList.length; i++) {
    if (answersList[i].answerer_name === "Seller") {
      arrayMove(answersList, i, 0);
    }
  }
  let minimumAListSize = 0;
  if (answersList.length > 2) { minimumAListSize = 2; }
  if (answersList.length <= 2) { minimumAListSize = answersList.length; }
  const [loadableAs, setLoadableAs] = useState(minimumAListSize); // State to hold count of answers shown. Def 2.
=======
  const [loadableAs, setLoadableAs] = useState(2); // State to hold count of answers shown. Def 2.
>>>>>>> master
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
<<<<<<< HEAD
        {(loadableAs === answersList.length && loadableAs !== minimumAListSize) && <input className="abutton" type="button" value="Collapse answers..." onClick={() => setLoadableAs(2)} />}
=======
        {(loadableAs === answersList.length) && <input className="abutton" type="button" value="Collapse answers..." onClick={() => setLoadableAs(2)} />}
>>>>>>> master
      </div>
    </div>
  );
}

export default Alist;
