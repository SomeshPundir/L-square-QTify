// SearchBar.jsx
import React from 'react';
import './searchbar.css'; // Import the CSS file
import  search from "../assets/qtifySearch.svg"
const SearchBar = () => {
  return (
    <div className="searchBarContainer">
      <input type="text" placeholder="Search a song of your choice" className="input" />
      <button className="searchButton">
        <img src={search} alt="Search" className="searchIcon" />
      </button>
    </div>
  );
};

export default SearchBar;
