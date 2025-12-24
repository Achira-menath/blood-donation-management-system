import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";

import bloodDrop from "../../assets/logo.png";
import bloodlinkLogo from "../../assets/bloodlink.png";
import successIcon from "../../assets/success.png";

import "./Thank-for-register.css";

export default function RegisterSuccess() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dummyEmail = "user@example.com";
  const dummyPassword = "123";

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    if (email === dummyEmail && password === dummyPassword) {
      alert("Login Successful!");
      navigate("/home"); 
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <>
      <HeaderMain />

      <br />

    
      <main className="rs-main">
        <div className="rs-content">
          
          <div className="rs-left">
            <img src={successIcon} alt="Success" className="rs-success-icon" />

            <h2>
              You’re registered <br /> Successfully!
            </h2>

            <p className="rs-text">
              Thank you for registering! Your kindness and willingness to help
              can save lives. We’re excited to have you in our donor community.
            </p>

            <p className="rs-login-text">
              Please log in to continue and access your dashboard.
            </p>
          </div>

         
          <div className="rs-right">
            <div className="rs-logo-box">
              <img src={bloodDrop} alt="Blood Drop" className="rs-drop-logo" />
              <img src={bloodlinkLogo} alt="BloodLink" className="rs-text-logo" />
            </div>

           
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="rs-error">{error}</p>}

            <span className="rs-forgot">Forgot password?</span>
            <button className="rs-btn" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </main>
      <br />
      <br />
      <br />

      <section className="rs-stats">
        <div>
          <h3>10,000+</h3>
          <p>Registered Donors</p>
        </div>
        <div>
          <h3>500+</h3>
          <p>Partner Hospital</p>
        </div>
        <div>
          <h3>50,000+</h3>
          <p>Lives Saved</p>
        </div>
        <div>
          <h3>5 min</h3>
          <p>Average Response Time</p>
        </div>
      </section>

      <Footer bgColor="#951215" opacity={1} />
    </>
  );
}
