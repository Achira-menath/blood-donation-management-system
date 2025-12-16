import React from "react";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import "./Contactus.css";
import contactus from "../../assets/contactus.png"; // your PNG
import contactus2Photo from "../../assets/contactus2.png"; // your second PNG

export default function Contact() {
  return (
    <>
      <HeaderMain />
      <div className="contact-container">

        <button className="back-btn">Back Home</button>

        <div className="contact-content">

          {/* Left Illustration */}
          <div className="contact-image">
            <img src={contactus} alt="Contact Support" />
          </div>

          {/* Right Card */}
          <div className="contact-card">
            <h2>Need to Talk?</h2>

            <div className="contact-info">
              <p><strong>Email:</strong></p>
              <p>chamikabandara2003@gmail.com</p>

              <p><strong>Phone:</strong></p>
              <p>+94 776237589</p>
            </div>

            <div className="contact-photo">
              <img src={contactus2Photo} alt="Contact illustration" />
            </div>
          </div> {/* <- Closed the contact-card div here */}

        </div>

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

      </div>
      <Footer bgColor="#FF0105" opacity={0.5} />
    </>
  );
}
