import "./HeaderMain.css";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import bloodlink from "../assets/bloodlink.png";
import profilePic from "../assets/profilePic.png";

export default function HeaderMain() {
  return (
   <header className="header">
  <div className="header-container">

    {/* LEFT: Logo */}
    <div className="logo-section">
      <img src={logo} alt="Logo" className="logo-icon" />
      <img src={bloodlink} alt="BloodLink" className="logo-text" />
    </div>

    {/* RIGHT: Nav + Profile */}
    <div className="right-section">
      <nav className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/search">Search Donor</Link>
        <Link to="/donate">Donate Blood</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Link to="/viewprofile" className="profile-box">
        <span>Your Profile</span>
        <img
          src={profilePic}
          alt="profile pic"
          className="profile-pic"
        />
      </Link>
    </div>

  </div>
</header>
  );
}
