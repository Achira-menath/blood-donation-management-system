import React from 'react';
import { Link } from "react-router-dom";
import './Headerblank.css'; 
import Hedimg from "../assets/BLD.png";

const Header = () => {
  return (
    <header className="home-header">
      <div className="home-logo-container">
        {/* Logo එක මෙතැන තිබේ */}
        <img src={Hedimg} alt="logo" className="header-logo" />
      </div>
      
    </header>
  );
};

export default Header;