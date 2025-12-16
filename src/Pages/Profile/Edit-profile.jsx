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

  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
 };


  const [formData, setFormData] = useState({
  firstName: "Hirushi",
  lastName: "Chamathka",
  province: "Southern Province",
  district: "Galle",
  gender: "Female",
  address: "92B, Colombo rd, Galle",
  dob: "2004-03-20",
  lastDonation: "2024-06-29",
 });

 const handleProvinceChange = (e) => {
  const selectedProvince = e.target.value;
  setFormData({
    ...formData,
    province: selectedProvince,
    district: provinceDistricts[selectedProvince][0], // reset district
  });
 };

  const provinceDistricts = {
  "Western Province": ["Colombo", "Gampaha", "Kalutara"],
  "Central Province": ["Kandy", "Matale", "Nuwara Eliya"],
  "Southern Province": ["Galle", "Matara", "Hambantota"],
  "Northern Province": ["Jaffna", "Kilinochchi", "Mannar", "Vavuniya", "Mullaitivu"],
  "Eastern Province": ["Trincomalee", "Batticaloa", "Ampara"],
  "North Western Province": ["Kurunegala", "Puttalam"],
  "North Central Province": ["Anuradhapura", "Polonnaruwa"],
  "Uva Province": ["Badulla", "Monaragala"],
  "Sabaragamuwa Province": ["Ratnapura", "Kegalle"],
 };


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
                <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                />
            </div>

            <div className="field province">
                <label>Province</label>
                <select
                name="province"
                value={formData.province}
                onChange={handleProvinceChange}
                >
                {Object.keys(provinceDistricts).map((prov) => (
                    <option key={prov} value={prov}>
                    {prov}
                    </option>
                ))}
                </select>
            </div>

            <div className="field last-name">
                <label>Last Name</label>
                <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                />
            </div>

            <div className="field district">
                <label>District</label>
                <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                >
                {provinceDistricts[formData.province].map((dist) => (
                    <option key={dist} value={dist}>
                    {dist}
                    </option>
                ))}
                </select>
            </div>

            <div className="field dob">
                <label>Date Of Birth</label>
                <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                />
            </div>

            <div className="field gender">
                <label>Gender</label>
                <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                >
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
                </select>
            </div>

            <div className="field address">
                <label>Address</label>
                <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                />
            </div>

            <div className="field donation">
                <label>Last Donation Date</label>
                <input
                type="date"
                name="lastDonation"
                value={formData.lastDonation}
                onChange={handleChange}
                />
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
