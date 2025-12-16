// src/pages/Home.jsx (Updated File - Renamed/Replaced your Home-page-AL.jsx)
import React from "react";
import Header from "./Header"; // New header component
import FooterHome from "./FooterHome"; // New footer component
import "./Home-page.css"; // New CSS file for the main content
import Homeimg from "../../assets/home.png";

// You will need to replace '/path/to/blood-bag.png' and 
// '/path/to/small-blood-drop.png' with the actual paths to your image assets.

export default function Home() {
  return (
    <div className="home-page-container">
      <Header />
      
      {/* Hero Section */}
      <main className="hero-section">
        <div className="hero-text-content">
          <p className="hero-quote">
            “To create a world where no life is lost due to the **unavailability of blood**.”
          </p>
          <p className="hero-description">
            Blood-link will be the universally recognized, instant, and trusted bridge connecting every urgent blood request with a willing, local donor.
          </p>
          
          {/* Small image on the left, replace with your asset */}
          <div className="small-logo-box">
            <img src="/Assets/small-blood-drop.png" alt="Give Blood Save Life" className="small-logo-img" />
            <span>GIVE BLOOD SAVE LIFE</span>
          </div>

          <button className="main-login-btn">Log in</button>
        </div>

        <div className="hero-image-content">
          {/* Main illustration image, replace with your asset */}
          <img src={Homeimg} alt="bg image" />
        </div>
      </main>

      {/* Statistics Bar */}
      <div className="stats-bar">
        <div className="stat-item">
          <p className="stat-number">10,000+</p>
          <p className="stat-label">Registered Donor</p>
        </div>
        <div className="stat-item">
          <p className="stat-number">500+</p>
          <p className="stat-label">Partner Hospital</p>
        </div>
        <div className="stat-item">
          <p className="stat-number">50,000+</p>
          <p className="stat-label">Lives Saved</p>
        </div>
        <div className="stat-item">
          <p className="stat-number">5 min</p>
          <p className="stat-label">Average Response Time</p>
        </div>
      </div>

      <FooterHome />
    </div>
  );
}