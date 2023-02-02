import React, { useState } from 'react';

<<<<<<< HEAD
function Search({ questionList, setQuestionList, setSearchTerm }) {
  const onChangeSearch = (e) => { // Handler for onchange.
    setSearchTerm(e.target.value);
=======
function Search({ questionList, setQuestionList }) {
  const [searchTerm, setSearchTerm] = useState(''); // Hold search term state.
  const onChangeSearch = (e) => { // Handler for onchange.
    console.log(e.target.value);
>>>>>>> master
  };

  return (
    <div className="search">
      <input className="searchTerm" onChange={onChangeSearch} placeholder="Have a question? Search for answers…" />
    </div>
  );
}

export default Search;
