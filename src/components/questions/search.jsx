import React, { useState } from 'react';

function Search({ questionList, setQuestionList, setSearchTerm }) {
  const onChangeSearch = (e) => { // Handler for onchange.
    if (e.target.value.length >= 3) {
      setSearchTerm(e.target.value);
    } else {
      setSearchTerm('');
    }
  };

  return (
    <div className="search">
      <input className="searchTerm" onChange={onChangeSearch} placeholder="Have a question? Search for answers…" />
    </div>
  );
}

export default Search;
