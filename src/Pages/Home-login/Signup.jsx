import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";
import Headerblank from "../../components/Headerblank";
import Footer from "../../components/Footer";

const Signup = ({ close }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signup-wrapper">
      {/* පිටුවේ ඉහළින්ම header එක පෙන්වයි */}
      <Headerblank />

      <div className="overlay" onClick={close}>
        <div className="signup-card" onClick={(e) => e.stopPropagation()}>
          

          <form onSubmit={handleSubmit}>
            <div className="row">
              <input type="text" placeholder="First Name" required />
              <input type="text" placeholder="Last Name" required />
            </div>

            <div className="row">
              <input type="date" required />
              <input type="text" placeholder="Address" required />
            </div>

            <div className="row">
              <input type="tel" placeholder="Phone Number" required />
              <select required>
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
              <input type="text" placeholder="State" required />
              <input type="number" placeholder="Age" required />
            </div>

            <div className="row">
              <input type="text" placeholder="District" required />
              <input type="password" placeholder="Password" required />
            </div>

            <input
              className="full"
              type="date"
              placeholder="Last Donation Date"
            />

            <label className="checkbox">
              <input type="checkbox" required />
              I agree to the terms and conditions
            </label>

            <Link to="/signupthank">
              <button type="submit" className="submit">
                Submit
              </button>
            </Link>
          </form>

        
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    
      <Footer bgColor="#000000ff" opacity={1} />
    </div>
  );
};

export default Signup;