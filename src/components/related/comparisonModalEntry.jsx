import React from 'react';
import PropType from 'prop-types';

export default function ComparisonModalEntry({ name, value, type }) {
  let left;
  let right;
  if (type === 'shared') {
    left = '✓';
    right = '✓';
  } else if (type === 'left') {
    left = '✓';
    right = '';
  } else {
    left = '';
    right = '✓';
  }

  return (
    <div className="cmp-mdl-grid cmp-mdl-features">
      <div className="grid-itm">{left}</div>
      <div className="grid-itm">{`${value} ${name}`}</div>
      <div className="grid-itm">{right}</div>
    </div>
  );
}

ComparisonModalEntry.propTypes = {
  name: PropType.string.isRequired,
  value: PropType.string.isRequired,
  type: PropType.string.isRequired,
};
