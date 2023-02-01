import React, { useState, useEffect, useRef } from 'react';
import PropType from 'prop-types';
import axios from 'axios';

export default function ComparisonModal({ leftID, rightID, setComparison }) {
  const [dataL, setdataL] = useState([]);
  const [dataR, setdataR] = useState([]);
  const [features, setFeatures] = useState([]);
  // const [sharedFeatures, setSharedFeatures] = useState([]);
  // const [uniqFeatures, setUniqFeatures] = useState([]);
  const [isHidden, toggleHidden] = useState(true);
  // const test = useRef(null);
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
    if (dataL.features !== undefined) {
      setFeatures(dataL.features);
    }
  }, [dataL]);

  useEffect(() => {
    // test.current = dataL.features;
    // console.log('USE REF L: ', test.current);
    // test.current = dataR.features;
    // console.log('USE REF R: ', test.current);
    if (dataR.features !== undefined) {
      setFeatures((oldFeats) => {
        const leftFeats = {};
        oldFeats.forEach(
          (oldFeat) => {
            leftFeats[oldFeat.feature] = oldFeat.value;
            return oldFeat;
          },
        );
        const rightFeats = {};
        dataR.features.forEach(
          (newFeat) => {
            rightFeats[newFeat.feature] = newFeat.value;
          },
        );
        console.log('left: ', leftFeats);
        console.log('right: ', rightFeats);
        const sharedFeats = {};
        (Object.keys(leftFeats)).forEach((key) => {
          console.log(key);
          if (leftFeats[key] === rightFeats[key]) {
            sharedFeats[key] = leftFeats.value;
            delete leftFeats[key];
            delete rightFeats[key];
          }
        });
        console.log('shared: ', sharedFeats);
        console.log('left: ', leftFeats);
        console.log('right: ', rightFeats);
        return oldFeats;
      });
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
      <div className="cmp-mdl-contents">
        Comparing
        <div className="cmp-mdl-grid cmp-mdl-products">
          <div className="grid-itm">{dataL.name}</div>
          <div className="grid-itm" />
          <div className="grid-itm">{dataR.name}</div>
        </div>
        <div className="cmp-mdl-grid cmp-mdl-features">

        </div>
      </div>
    </div>
  );
}

ComparisonModal.propTypes = {
  leftID: PropType.string.isRequired,
  rightID: PropType.string.isRequired,
  setComparison: PropType.func.isRequired,
};
