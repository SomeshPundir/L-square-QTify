// Logo.jsx
import React from 'react';
import './logo.css'; // Import the CSS file
import  logoimg from "../assets/Group 1.png"
const Logo = () => {
  return (
    <div className="logoContainer">
      <img src={logoimg} alt="QTify Logo" className="logo" />
    </div>
  );
};

export default Logo;



