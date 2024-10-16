import React, { useState } from 'react';

function SearchBar({ onSearch, onFilterChange }) {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('');

  const handleSearch = () => {
    onSearch(query, type);
  };

  const handleFilterChange = (e) => {
    setType(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <select onChange={handleFilterChange} value={type}>
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
