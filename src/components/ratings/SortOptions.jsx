import React from 'react';


const SortOptions = () => {

return (
  <div>
   <label htmlFor="cars">Choose a car:</label>
  <select name="sortOptions" id="sortOptions">
  <option value="Relevance">Relevance</option>
  <option value="Helpful">Helpful</option>
  <option value="Newest">Newest</option>
</select>
</div>
);

};


export default SortOptions;

