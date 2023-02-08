import React from 'react';


const SortOptions = ({sortFunction}) => {

return (

  <div>
   <label for="Reviews">Sort By:</label>
  <select className='flexButtons' name="sortOptions" id="sortOptions" onChange={(e) => {
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

