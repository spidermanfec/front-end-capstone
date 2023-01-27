import React, { useState } from 'react';

function Search({ questionList, setQuestionList }) {
  const [searchTerm, setSearchTerm] = useState('');
  const onChangeSearch = (e) => {
    console.log(e)
  };

  return (
    <div className="search">
      <input className="searchTerm" defaultValue="Have a question? Search for answers…" />
      <button type="submit" className="searchButton" onChange={onChangeSearch}>SEARCH</button>
    </div>
  );
}

export default Search;
