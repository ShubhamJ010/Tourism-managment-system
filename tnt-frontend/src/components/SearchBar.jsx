// src/components/SearchBar.jsx
import React from "react";
import "../styles/SearchBar.css"; // Import your custom CSS file

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search Places..."
        onChange={(e) => onSearch(e.target.value)}
        //value={query}
      />
    </div>
  );
};

export default SearchBar;
