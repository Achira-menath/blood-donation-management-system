import React, { useState } from "react";
import "./Login.css";
import Signup from "./Signup.css";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <>
      <div className="page">
        {/* Navbar */}
        <header className="navbar">
          <div className="nav-logo">🩸 BloodLink</div>
          <nav>
            <ul>
              <li>Home</li>
              <li>Search Donor</li>
              <li>Donate Blood</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>

        {/* Content */}
        <main className="content">
          <div className="quote-section">
            <p>
              “Every drop of blood you donate brings hope and life to someone in
              need.”
            </p>
          </div>

          <div className="login-box">
            <h2>🩸 BloodLink</h2>

            <input type="text" placeholder="User ID" />
            <input type="password" placeholder="Password" />

            <div className="forgot">Forgot Password?</div>

            <button className="login-btn">Login</button>

            <p className="signup-text">
              If you are not registered please sign up
            </p>

            <button
              className="signup-btn"
              onClick={() => setShowSignup(true)}
            >
              Sign Up
            </button>
          </div>
        </main>

        {/* Footer */}
        <footer className="footer">
          Copyright © 2025 National Blood Transfusion Service – All
          Rights Reserved
        </footer>
      </div>

      {/* Signup Modal / Page */}
      {showSignup && <Signup close={() => setShowSignup(false)} />}
    </>
  );
};

export default Login;
