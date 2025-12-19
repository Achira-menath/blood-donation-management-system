import React from "react";
import { Link } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import "./Contact-feedback.css";
import contactIllustration from "../../assets/feedback.png";

export default function ContactFeedback() {
  return (
    <>
      <HeaderMain />

      <div className="cf-container">
        <button className="cf-back">Back Home</button>

        <div className="cf-main">
          <div className="cf-left">
            <h1 className="cf-title">Contact & Feedback</h1>
            <p className="cf-sub">Your voice matters! Share your inquiries, suggestions, or issues below. We're here to help our community.</p>

            <form className="cf-form" onSubmit={(e) => e.preventDefault()}>
              <div className="cf-row">
                <div className="cf-field">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter Your Name" />
                </div>

                <div className="cf-field">
                  <label>Email</label>
                  <input type="email" placeholder="Enter Your Email" />
                </div>
              </div>

              <div className="cf-row">
                <div className="cf-field">
                  <label>Number</label>
                  <input type="tel" placeholder="Enter Your Mobile Number" />
                </div>

                <div className="cf-field">
                  <label>Category</label>
                  <select>
                    <option>None</option>
                    <option>General</option>
                    <option>Feedback</option>
                    <option>Report an issue</option>
                    <option>Partnership</option>
                  </select>
                </div>
              </div>

              <div className="cf-field cf-full">
                <label>Message</label>
                <textarea placeholder="Enter Anything about us"></textarea>
              </div>

              <div className="cf-submit-row">
                <Link to="/Feedbackthanks">
                <button className="cf-submit">Submit Feedback</button>
                </Link>
              </div>
            </form>
          </div>

          <div className="cf-right">
            <div className="cf-illustration">
              <img src={contactIllustration} alt="Contact Illustration" />
            </div>
          </div>
        </div>


      </div>

      <Footer bgColor="#FF0105" opacity={0.5} />
    </>
  );
}
