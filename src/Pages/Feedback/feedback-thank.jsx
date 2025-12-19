
import React from 'react';
import './feedback-thank.css'; 

// Note: Replace these image paths with your actual assets
// import feedbackIcon from './assets/feedback-icon.png';
 import successIllustration from "../../assets/feedback-thank2.png";

const FeedbackSuccess = () => {
  return (
    <div className="feedback-page-container">
      {/* Top Navigation Row */}
      <div className="feedback-header-row">
        <button className="back-home-btn">
          Back Home
        </button>

        <div className="page-title-block">
          {/* Replace src with your feedback icon image */}
          <img 
            src="https://via.placeholder.com/60" 
            alt="Feedback Icon" 
            className="title-icon" 
          />
          <div className="title-text-group">
            <h1>Contact & Feedback</h1>
            <p>Your voice matters! Share your inquiries, suggestions, or <br/> issues below. We're here to help our community.</p>
          </div>
        </div>
      </div>

      {/* Main Content Split: Message & Illustration */}
      <div className="feedback-content-body">
        
        {/* Left Side: Success Message */}
        <div className="success-message-column">
          <div className="check-circle">
            ✔
          </div>
          <h2>Thank You! Your<br />Feedback is Valuable</h2>
          <p className="success-subtext">
            Your feedback has successfully submitted. We<br />
            appreciate a input will get to you soon.
          </p>
        </div>

        {/* Right Side: Illustration */}
        <div className="illustration-column">
          {/* Replace src with your illustration image */}
          <img src={successIllustration} alt="Success Illustration" className="main-illustration" />
        </div>

      </div>
    </div>
  );
};

export default FeedbackSuccess;