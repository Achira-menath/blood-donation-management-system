import React from "react";
import { Link } from "react-router-dom";
import "../Home-login/Home-page.css";
import Header from "./Header";
import heroImg from "../../assets/home.png"; // your main illustration
import www from "../../assets/www.png";   // BloodLink logo
import bld from"../../assets/BLD.png";
const HomePage = () => {
  return (
    <div className="homepage">
      {/* 1. Header එක මෙතැනට ඇතුළත් කළා */}
      <Header /> 

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-left">
          <h1>
            “To create a world<br />
            where no life is lost<br />
            due to the<br />
            unavailability of<br />
            blood.”
          </h1>
          <p className="hero-text">
            Blood-link will be the universally recognized, instant, and trusted
            bridge connecting every urgent blood request with a willing, local
            donor.
          </p>
          <button className="login-btn">Log in</button>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="Blood donation illustration" />
          <p className="hero-quote">“Every login brings you closer to saving a life.”</p>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats">
        <div className="stat-item">
          <h2>10,000+</h2>
          <p>Registered Donor</p>
        </div>
        <div className="stat-item">
          <h2>500+</h2>
          <p>Partner Hospital</p>
        </div>
        <div className="stat-item">
          <h2>50,000+</h2>
          <p>Lives Saved</p>
        </div>
        <div className="stat-item">
          <h2>5 min</h2>
          <p>Average Response Time</p>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <img src={bld} alt="bld" className="cta-logo"/>
        <p className="cta-text">Connecting Hearts · Saving Lives · Every drop counts</p>

      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="cta-actions">
          <div className="feedback-box">
            <p>Share your experience with us!</p>
            <Link to="/Feedback">
            <button className="outline-btn">Click Here to send Feedback</button>
            </Link>
          </div>
          <div className="donate-box">
            <p>Ready to save lives!</p>
            <button className="donate-btn">Donate</button>
          </div>
          <img src={www} className="droplo" alt="Logo" />
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Services</h4>
            <p>Donor Services</p>
            <p>Collection Services</p>
            <p>Campaigns</p>
            <p>Request Handling</p>
          </div>
          <div className="footer-col">
            <h4>About</h4>
            <p>Our Story</p>
            <p>Benefits</p>
            <p>Team</p>
            <p>Mission</p>
          </div>
          <div className="footer-col">
            <h4>Help</h4>
            <p>FAQs</p>
            <p>Contact Us</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;