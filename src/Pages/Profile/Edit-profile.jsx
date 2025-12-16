import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

import Vbg from "../../assets/Vbg.png";
import profileImg from "../../assets/profilePic.png";
import logo from "../../assets/logo.png";
import bloodlink from "../../assets/bloodlink.png";

import "./Edit-profile.css";

export default function EditProfile() {
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

  return (
    <>
      <div
        className="edit-page"
        style={{ backgroundImage: `url(${Vbg})` }}
      >
        {/* HEADER */}
        <div className="edit-header">
          <div>
            <h1>Welcome, Hirushi</h1>
            <p>{date}</p>
          </div>

          <Link to="/Viewprofile">
            <button className="save-btn">Save Details</button>
          </Link>
        </div>

        {/* MAIN CARD */}
        <div className="edit-card">
          {/* USER INFO */}
          <div className="edit-user">
            <img src={profileImg} alt="profile" />
            <div>
              <h3>Hirushi Chamathka</h3>
              <span>ID : 652310</span>
            </div>
          </div>

          {/* FORM */}
          <form className="edit-form">
            <div className="field first-name">
                <label>First Name</label>
                <input value="Hirushi" readOnly />
            </div>

            <div className="field province">
                <label>Province</label>
                <select>
                <option>Southern Province</option>
                </select>
            </div>

            <div className="field last-name">
                <label>Last Name</label>
                <input value="Chamathka" readOnly />
            </div>

            <div className="field district">
                <label>District</label>
                <select>
                <option>Galle</option>
                </select>
            </div>

            <div className="field dob">
                <label>Date Of Birth</label>
                <input value="20/03/2004" readOnly />
            </div>

            <div className="field gender">
                <label>Gender</label>
                <select>
                <option>Female</option>
                <option>Male</option>
                </select>
            </div>

            <div className="field address">
                <label>Address</label>
                <input value="92B, Colombo rd, Galle" readOnly />
            </div>

            <div className="field donation">
                <label>Last Donation Date</label>
                <input value="29 - 6 - 2024" readOnly />
            </div>
            </form>

        </div>

             {/* BloodLink Logo */}
            <img src={logo} alt="logo" className="logo" />
            <img src={bloodlink} alt="BloodLink" className="bloodlink" />
      </div>

      <Footer bgColor="#030000" opacity={0.6} />
    </>
  );
}
