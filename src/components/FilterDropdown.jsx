import React from 'react';

function FilterDropdown({ onFilter }) {
  const handleFilterChange = (event) => {
    onFilter(event.target.value);
  };

  return (
    <select onChange={handleFilterChange} className="filter-dropdown">
      <option value="">All</option>
      <option value="movie">Movies</option>
      <option value="series">Series</option>
      <option value="episode">Episodes</option>
    </select>
  );
}

export default FilterDropdown;
