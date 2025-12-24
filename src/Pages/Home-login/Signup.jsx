import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

const Signup = ({ close }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    address: "",
    phone: "",
    bloodGroup: "",
    state: "",
    age: "",
    district: "",
    password: "",
    lastDonationDate: "",
    termsAccepted: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.termsAccepted) {
      setError("You must accept the terms and conditions.");
      return;
    }

    // Here you can add API call to save the user data

    setError("");
    navigate("/signupthank"); // Navigate to thank you page after submission
  };

  return (
    <div className="signup-wrapper">

      <div className="overlay" onClick={close}>
        <div className="signup-card" onClick={(e) => e.stopPropagation()}>
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="row">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="row">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                required
              >
                <option value="">Blood Group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </div>

            <div className="row">
              <input
                type="text"
                name="state"
                placeholder="State"
                value={formData.state}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="row">
              <input
                type="text"
                name="district"
                placeholder="District"
                value={formData.district}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <input
              className="full"
              type="date"
              name="lastDonationDate"
              value={formData.lastDonationDate}
              onChange={handleChange}
              placeholder="Last Donation Date"
            />

            <label className="checkbox">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              I agree to the terms and conditions
            </label>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer bgColor="#000000ff" opacity={1} />
    </div>
  );
};

export default Signup;
