import React from "react";
import "./Home-page-AL.css";
import { Link } from "react-router-dom";
import heroImg from "../../assets/hero-main.png";
import HeaderMain from "../../components/HeaderMain";
import footerLogo from "../../assets/bloodlink.png";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <div className="home">

      <HeaderMain /> 

      {/* HERO */}
      <section className="hero">
        <div className="hero-box left">
          <h1>Need<br />Blood?</h1>
          <p>
            “Quickly search across our database of more than 10,000 donors.”
          </p>
          <Link to="/Search">
          <button className="primary-btn">Search Donors</button>
          </Link>
          
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Blood donation" />
        </div>

        <div className="hero-box right">
          <h1>“Want to save<br />a life?”</h1>
          <p>
            “A few minutes of your time can give someone a lifetime—donate blood.”
          </p>
           <Link to="/Donate">
           <button className="secondary-btn">Donate Blood</button>
           </Link>
          
        </div>
      </section>

      <p className="hero-footer-text">
        Blood-link will be the universally recognized, instant, and trusted bridge
        connecting every urgent blood request with a willing, local donor.
      </p>

      {/* STATS */}
      <section className="stats">
        <div><h2>10,000+</h2><p>Registered Donor</p></div>
        <div><h2>500+</h2><p>Partner Hospital</p></div>
        <div><h2>50,000+</h2><p>Lives Saved</p></div>
        <div><h2>5 min</h2><p>Average Response Time</p></div>
      </section>

      {/* CTA */}
      <section className="cta">
        <img src={footerLogo} alt="BloodLink" />
        <p>Connecting Hearts · Saving Lives · Every drop counts</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div>
            <p>Share your experience with us!</p>
            <Link to="/Feedback">
            <button className="outline-btn">Click Here to send Feedback</button>
            </Link>
            
          </div>
          

          <div>
            <p>Ready to save lives!</p>
            <Link to="/Donate">
            <button className="donate-btn">Donate</button>
            </Link>
            
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Services</h4>
            <p>Donor Services</p>
            <p>Collection Services</p>
            <p>Campaigns</p>
            <p>Request Handling</p>
          </div>

          <div>
            <h4>About</h4>
            <p>Our Story</p>
            <p>Benefits</p>
            <p>Team</p>
            <p>Mission</p>
          </div>

          <div>
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
      <Footer bgColor="#951215" opacity={1} />
    </div>
  );
};

export default HomePage;
