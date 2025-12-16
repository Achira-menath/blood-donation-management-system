// src/components/Header.jsx (New File)
import React from 'react';
import './Header.css'; // Assuming you put the CSS in a styles folder
import Hedimg from "../../assets/logo.png";

// You will need to replace '/path/to/blood-drop-logo.png' and 
// '/path/to/bloodlink-text-logo.png' with the actual paths to your image assets.

const Header = () => {
  return (
    <header className="home-header">
      <div className="home-logo-container">
        {/* Replace with your blood drop logo */}
        <img src={Hedimg} alt="logo" className="header-logo" />

        {/* Assuming you want the text logo here, based on your original Login.jsx */}
        <span className="logo-text">BloodLink</span>
      </div>
      <div className="header-buttons">
        <button className="log-in-btn">Log in</button>
        <button className="sign-up-btn">Sign up</button>
      </div>
    </header>
  );
};

export default Header;