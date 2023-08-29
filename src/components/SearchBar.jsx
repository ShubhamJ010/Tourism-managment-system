// src/components/SearchBar.jsx
import React from 'react';
import '../styles/SearchBar.css'; // Import your custom CSS file

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search places..."
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
