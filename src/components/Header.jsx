import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import logo from "../assets/logo.png";
import bloodlink from "../assets/bloodlink.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="logo-section">
          <img src={logo} alt="Logo" className="logo" />
          <img src={bloodlink} alt="BloodLink" className="brand-text" />
        </div>

        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search Donor</Link></li>
            <li><Link to="/donate">Donate Blood</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

      </div>
    </header>
  );
}
