import React from "react";
import "./Headerblank.css";

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
      </div>
    </header>
  );
}
