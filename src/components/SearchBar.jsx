import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="search-container">
    <input
      type="text"
      placeholder="Tìm kiếm sản phẩm..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
      className="search-input"
    />
  </div>
);

export default SearchBar;
