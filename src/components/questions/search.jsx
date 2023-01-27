import React from 'react';

function Search() {
  return (
    <div className="search">
      <input className="searchTerm" defaultValue="Search questions for..." />
      <button type="submit" className="searchButton"><i className="fa fa-search">Search</i></button>
    </div>
  );
}

export default Search;
