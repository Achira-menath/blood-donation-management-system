import React, { useState } from "react";
import "./Login.css";
import Signup from "./Signup";
import Headerblank from "../../components/Headerblank";
import loginImg from "../../assets/login.png";
import Footer from "../../components/Footer";
import bloodDrop from "../../assets/logo.png";
import bloodlinkLogo from "../../assets/bloodlink.png";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="page">
      <Headerblank />

      <main className="content">
        {/* LEFT IMAGE */}
        <div className="image-section">
          <img src={loginImg} alt="Login" />
        </div>

        {/* RIGHT LOGIN CARD */}
        <div className="login-box">
          <img src={bloodDrop} alt="Blood Drop" className="rs-drop-logo" /><br />
              <img src={bloodlinkLogo} alt="BloodLink" className="rs-text-logo" /><br />

          <input type="text" placeholder="User ID" />
          <input type="password" placeholder="Password" />

          <div className="forgot">Forgot password?</div>

          <button className="login-btn">Login</button>

          <p className="signup-text">
            If you are not Registered please Sign up.
          </p>

          <button className="signup-btn" onClick={() => setShowSignup(true)}>
            Sign Up
          </button>
        </div>
      </main>

      <Footer bgColor="#000000ff" opacity={1} />

      {showSignup && <Signup close={() => setShowSignup(false)} />}
    </div>
  );
};

export default Login;
