import React from 'react';


const SortOptions = ({sortFunction}) => {

return (

  <div>
      <h4>Sort Options</h4>
   <label for="Reviews">Sort By:</label>
  <select name="sortOptions" id="sortOptions" onChange={(e) => {
    // console.log('PENISP', e.target.value)
    sortFunction(e.target.value);
  }}>
  <option value="Relevance">Relevance</option>
  <option value="Helpful">Helpful</option>
  <option value="Newest" onSelect={() => {
     console.log('aaa"');
  }}>Newest</option>
</select>
</div>
);

};


export default SortOptions;

