import React, { useState } from "react";
import "./Login.css";
import Signup from "./Signup";
import Headerblank from "../../components/Headerblank";
import loginImg from "../../assets/login.png";
import Footer from "../../components/Footer";
import bloodDrop from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import bloodlinkLogo from "../../assets/bloodlink.png";

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Dummy credentials for demonstration
  const validCredentials = {
    email: "user@example.com",
    password: "123"
  };

  const handleLogin = () => {
    if (!userId || !password) {
      setError("Please enter both User ID and Password.");
      return;
    }

    if (userId === validCredentials.email && password === validCredentials.password) {
      setError("");
      navigate("/home"); // redirect to home on successful login
    } else {
      setError("Invalid User ID or Password.");
    }
  };

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

          <input
            type="email"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <div className="error-message">{error}</div>}

          <div className="forgot">Forgot password?</div>

          <button className="login-btn" onClick={handleLogin}>
            Login
          </button>

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
