import React, { useState } from 'react';

function Search({ questionList, setQuestionList }) {
  const [searchTerm, setSearchTerm] = useState(''); // Hold search term state.
  const onChangeSearch = (e) => { // Handler for onchange.
    console.log(e.target.value);
  };

  return (
    <div className="search">
      <input className="searchTerm" onChange={onChangeSearch} placeholder="Have a question? Search for answers…" />
    </div>
  );
}

export default Search;
