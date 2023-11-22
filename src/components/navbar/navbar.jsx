// Navbar.jsx
import React from 'react';
import Logo from '../logo/logo';
import SearchBar from '../searchbar/searchbar';
import FeedbackButton from '../button/button';
import  './navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <SearchBar />
      <FeedbackButton buttonText="Give Feedback" />
    </div>
  );
};

export default Navbar;
