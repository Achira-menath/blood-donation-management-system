// src/Pages/Home-login/Header.jsx
import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'; 
import Hedimg from "../../assets/BLD.png";

const Header = () => {
  return (
    <header className="home-header">
      <div className="home-logo-container">
        {/* Logo එක මෙතැන තිබේ */}
        <img src={Hedimg} alt="logo" className="header-logo" />
      </div>
      <div className="header-buttons">
         <Link to="/Login">
          <button className="log-in-btn">Log in</button>
         </Link>
         <Link to="/Signup">
          <button className="sign-up-btn">Sign up</button>
         </Link>
      </div>
    </header>
  );
};

export default Header;