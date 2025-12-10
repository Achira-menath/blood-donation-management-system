import React from "react";
import "./Signup.css";

const Signup = ({ close }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="overlay" onClick={close}>
      <div
        className="signup-card"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="logo">🩸</div>

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

          <button type="submit" className="submit">
            Submit
          </button>
        </form>

        <p className="footer">
          If you are registered please
          <span onClick={close}> Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
