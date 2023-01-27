import React from 'react';

function Search() {
  return (
    <div className="search">
      <input className="searchTerm" defaultValue="SEARCH QUESTIONS FOR..." />
      <button type="submit" className="searchButton">SEARCH</button>
    </div>
  );
}

export default Search;
