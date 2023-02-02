import React, { useState, useEffect, useRef } from 'react';
import PropType from 'prop-types';
import axios from 'axios';
import ComparisonModalEntry from './comparisonModalEntry.jsx';

export default function ComparisonModal({ leftID, rightID, setComparison }) {
  const [dataL, setdataL] = useState([]);
  const [dataR, setdataR] = useState([]);
  const [isHidden, toggleHidden] = useState(true);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [leftFeatures, setLeftFeatures] = useState({});
  const [rightFeatures, setRightFeatures] = useState({});
  const [sharedFeatures, setSharedFeatures] = useState({});

  useEffect(() => {
    if (leftID.length > 0) {
      axios.get('/products/id', {
        params: {
          q: JSON.stringify([leftID]),
        },
      })
        .then((results) => setdataL(results.data[0]))
        .catch((err) => console.log(err));
    }
  }, [leftID]);

  useEffect(() => {
    if (rightID.length > 0) {
      toggleHidden(false);
      axios.get('/products/id', {
        params: {
          q: JSON.stringify([rightID]),
        },
      })
        .then((results) => setdataR(results.data[0]))
        .catch((err) => console.log(err));
    }
  }, [rightID]);

  useEffect(() => {
    leftRef.current = dataL.features;
    if (dataR.features !== undefined) {
      rightRef.current = dataR.features;
      const leftFeats = {};
      const rightFeats = {};
      const sharedFeats = {};
      leftRef.current.forEach(
        (leftFeat) => {
          leftFeats[leftFeat.feature] = leftFeat.value;
        },
      );
      rightRef.current.forEach(
        (rightFeat) => {
          rightFeats[rightFeat.feature] = rightFeat.value;
        },
      );
      (Object.keys(leftFeats)).forEach((feat) => {
        if (leftFeats[feat] === rightFeats[feat]) {
          sharedFeats[feat] = leftFeats[feat];
          delete leftFeats[feat];
          delete rightFeats[feat];
        }
      });
      setLeftFeatures(leftFeats);
      setRightFeatures(rightFeats);
      setSharedFeatures(sharedFeats);
    }
  }, [dataR]);

  const style = {
    display: isHidden ? 'none' : 'block',
  };

  const buttonAction = () => {
    toggleHidden(true);
    setComparison('');
  };

  return (
    <div className="comparison-modal" style={style}>
      <button type="button" className="card-btn" onClick={buttonAction}>x</button>
      <small className="grid-itm">Comparing</small>
      <div className="cmp-mdl-grid cmp-mdl-products">
        <div className="grid-itm">{dataL.name}</div>
        <div className="grid-itm" />
        <div className="grid-itm">{dataR.name}</div>
      </div>
      <div className="cmp-mdl-contents">
        {(Object.keys(sharedFeatures).map((featName) => (
          <ComparisonModalEntry
            name={featName}
            value={sharedFeatures[featName]}
            type="shared"
          />
        )))}
        {(Object.keys(leftFeatures).map((featName) => (
          <ComparisonModalEntry
            name={featName}
            value={leftFeatures[featName]}
            type="left"
          />
        )))}
        {(Object.keys(rightFeatures).map((featName) => (
          <ComparisonModalEntry
            name={featName}
            value={rightFeatures[featName]}
            type="right"
          />
        )))}
      </div>
    </div>
  );
}

ComparisonModal.propTypes = {
  leftID: PropType.string.isRequired,
  rightID: PropType.string.isRequired,
  setComparison: PropType.func.isRequired,
};
