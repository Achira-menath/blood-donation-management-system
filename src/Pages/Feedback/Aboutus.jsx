import React from "react";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import "./Aboutus.css";
import aboutImg from "../../assets/Aboutus.png";

export default function AboutUs() {
  return (
    <>
      <HeaderMain />
      
      <button className="back-btn">Back Home</button>
      <div className="about-content">
        
        {/* Left Content */}
        <div className="about-text">
          <h2>🔴 About BloodLink</h2>
          <p>
            Connecting Lives, One Drop at a Time.
          </p>
          <p>
            At BloodLink, we believe that every drop of blood has the power to save a life.
            Our platform was created with a single goal: to make blood donation faster,
            easier, and more accessible for everyone—donors, recipients, and healthcare providers alike.
          </p>

          <h3>🩸 Who We Are</h3>
          <p>
            BloodLink is a community-powered initiative that bridges the gap between
            those who want to help and those who urgently need it.
          </p>

          <h3>🎯 Our Mission</h3>
          <p>
            To ensure that no life is lost due to the unavailability of blood.
            We aim to build a reliable, real-time network that empowers people
            to donate, request, and share blood with confidence and compassion.
          </p>

          <h3>💡 What We Offer</h3>
          <ul>
            <li><strong>Real-Time Matching:</strong> Connect donors with patients in need</li>
            <li><strong>Location-Based Search:</strong> Find nearby donors and blood banks</li>
            <li><strong>Donor Tracking:</strong> Manage donation history and reminders</li>
            <li><strong>Awareness Campaigns:</strong> Inspire communities to donate</li>
          </ul>

          <h3>🤝 Join the Movement</h3>
          <p>
            BloodLink is more than a website — it’s a movement of kindness and humanity.
            Together, we can build a future where no one has to wait for hope.
          </p>
        </div>

        <div className="about-image">
          <img src={aboutImg} alt="About BloodLink" />
        </div>

      </div>
    
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
