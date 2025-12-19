import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

// Images
import Vbg from "../../assets/Vbg.png";
import bloodlink from "../../assets/bloodlink.png";
import logo from "../../assets/logo.png";
import profileImg from "../../assets/profilePic.png";

import "./View-profile.css";

export default function ViewProfile() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const date = dateTime.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const time = dateTime.toLocaleTimeString();

  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${Vbg})` }}
      >
        {/* Header */}
        <div className="profile-header">
          <div>
            <h1>Welcome, Hirushi</h1>
            <p>{date} | {time}</p>
          </div>

          <div className="header-buttons">
            <Link to="/home">
            <button className="outline-btn">Back Home</button>
            </Link>
            <Link to="/Editprofile">
            <button className="outline-btn">Edit Profile</button>
            </Link>
            
          </div>
        </div>

        {/* Profile Content */}
        <div className="profile-wrapper">
          {/* User Info */}
          <div className="user-info">
            <img src={profileImg} alt="Profile" />
            <div>
              <h3>Hirushi Chamathka</h3>
              <span>ID : 652310</span>
            </div>
          </div>

          {/* Card */}
          <div className="profile-card">
            <h2>About</h2>
            <table>
              <tbody>
                <tr><td>Full Name</td><td>Hirushi Chamathka</td></tr>
                <tr><td>Email</td><td>hirushi29@gmail.com</td></tr>
                <tr><td>District</td><td>Galle</td></tr>
                <tr><td>Phone Number</td><td>0782345678</td></tr>
                <tr><td>Gender</td><td>Female</td></tr>
                <tr><td>Age</td><td>21</td></tr>
                <tr><td>Blood Group</td><td>O+</td></tr>
                <tr><td>Address</td><td>92B, Colombo Rd, Galle</td></tr>
                <tr><td>Last Donation Date</td><td>29 - 06 - 2024</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* BloodLink Logo */}
        <img src={logo} alt="logo" className="logo" />
        <img src={bloodlink} alt="BloodLink" className="bloodlink" />
      </div>
      <Footer bgColor="#030000" opacity={0.6} />
    </>
  );
}