import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./index.css";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <div className="search-bar">
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search recipes..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBar;
