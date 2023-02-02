import React, { useState } from 'react';

function Search({ questionList, setQuestionList, setSearchTerm }) {
  const onChangeSearch = (e) => { // Handler for onchange.
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search">
      <input className="searchTerm" onChange={onChangeSearch} placeholder="Have a question? Search for answers…" />
    </div>
  );
}

export default Search;
