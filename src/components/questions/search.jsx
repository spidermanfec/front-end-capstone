import React, { useState } from 'react';

function Search({ questionList, setQuestionList }) {
  const [searchTerm, setSearchTerm] = useState('');
  const onChangeSearch = (e) => {
    console.log(e.target.value);
  };

  return (
    <div className="search">
      <input className="searchTerm" onChange={onChangeSearch} placeholder="Have a question? Search for answers…" />
    </div>
  );
}

export default Search;
