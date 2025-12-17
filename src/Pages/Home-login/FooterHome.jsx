// src/components/FooterHome.jsx (New File)
import React from 'react';
import './FooterHome.css'; // Assuming you put the CSS in a styles folder
import Hedimg from "../../assets/logo.png";

// You will need to replace '/path/to/blood-drop-logo.png' with the actual path to your image asset.

const FooterHome = () => {
  return (
    <footer>
      {/* Upper Footer: Feedback and Donate */}
      <div className="footer-top-section">
        <div className="feedback-container">
          <div className="chat-icon">💬</div>
          <div>
            <p className="share-experience">Share your experience with us!</p>
            <button className="feedback-btn">Click Here to send Feedback</button>
          </div>
        </div>

        <div className="donate-container">
          <p className="ready-to-save">Ready to save Lives!</p>
          <button className="donate-btn">Donate</button>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="footer-links-section">
        <div className="footer-logo-area">
          {/* Replace with your blood drop logo */}
          <img src={Hedimg} alt="BloodLink Logo" className="footer-drop-logo" />
          <span className="footer-logo-text">BloodLink</span>
        </div>
        
        <div className="footer-link-group">
          <p className="link-heading">Services</p>
          <a href="#donor">Donor Services</a>
          <a href="#collection">Collection Services</a>
          <a href="#campaigns">Campaigns</a>
          <a href="#request">Request Handling</a>
        </div>
        
        <div className="footer-link-group">
          <p className="link-heading">About</p>
          <a href="#story">Our Story</a>
          <a href="#benefits">Benefits</a>
          <a href="#team">Team</a>
          <a href="#mission">Mission</a>
        </div>
        
        <div className="footer-link-group">
          <p className="link-heading">Help</p>
          <a href="#faqs">FAQs</a>
          <a href="#contact">Contact Us</a>
        </div>

        <div className="social-media">
            {/* Replace with actual social media icons/links */}
            <a href="#"><i className="fab fa-facebook-f">f</i></a>
            <a href="#"><i className="fab fa-twitter">t</i></a>
            <a href="#"><i className="fab fa-instagram">i</i></a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="privacy-links">
          <a href="#terms">Terms & Conditions</a>
          <a href="#privacy">Privacy Policy</a>
        </div>
        <div className="footer-copyright">
          Copyright © 2025 – National Blood Transfusion Service – All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default FooterHome;