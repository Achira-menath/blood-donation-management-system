import React from "react";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import "./Donateconfirm.css";
import hero from "../../assets/feedback-thank.png";

export default function FeedbackThank() {
  return (
    <>
      <HeaderMain />

      <main className="ft-container">
        <button className="ft-back">Back Home</button>

        <section className="ft-hero">
          <div className="ft-left">
            <img src={hero} alt="Thank illustration" />
          </div>

          <div className="ft-right">
            <div className="ft-check" aria-hidden>
              {/* Inline SVG check */}
              <svg width="88" height="88" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <circle cx="12" cy="12" r="12" fill="#25C06A" />
                <path d="M17.2 8.2L10.5 15l-3.7-3.7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <h2 className="ft-title">Thanks for submitting!</h2>
            <p className="ft-sub">You’re amazing for choosing to help others. We’ll get in touch with you right away with the next steps.</p>
          </div>
        </section>
      </main>
      <br />
      <br />
      <br />

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


      <Footer bgColor="#951215" opacity={1} />
    </>
  );
}
