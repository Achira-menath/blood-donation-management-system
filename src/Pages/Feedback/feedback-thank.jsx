import React from "react";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import "./feedback-thank.css"; 
import hero from "../../assets/feedback-thank2.png";


export default function FeedbackThank() {
  return (
    <>
      <HeaderMain />

      <main className="ft-container">
        {/* Back Button */}
        <button className="ft-back">Back Home</button>

        {/* 1. Contact & Feedback Header Section */}
        <section className="ft-top-header">
           <div className="header-content">
              <div className="header-icon">
                {/* මෙහි Figma එකේ ඇති icon එක දමන්න */}
                
              </div>
              <div className="header-text">
                <h1>Contact & Feedback</h1>
                <p>Your voice matters! Share your inquiries, suggestions, or issues below. We're here to help our community.</p>
              </div>
           </div>
        </section>

        {/* 2. Main Content Area */}
        <section className="ft-hero">
          <div className="ft-right">
            <div className="ft-check">
              <svg width="88" height="88" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#25C06A" />
                <path d="M17.2 8.2L10.5 15l-3.7-3.7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="ft-title">Thank You! Your<br/>Feedback is Valuable</h2>
            <p className="ft-sub">
              Your feedback has successfully submitted. We appreciate a input will gek to you soon.
            </p>
          </div>

          <div className="ft-left">
            <img src={hero} alt="Thank illustration" />
          </div>
        </section>
      </main>

       {/* Stats Bar */}
        <div className="contact-stats">
          <div>
            <h3>10,000+</h3>
            <p>Registered Donor</p>
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
        </div>

      <Footer bgColor="#FF0105" opacity={0.3} />
    </>
  );
}