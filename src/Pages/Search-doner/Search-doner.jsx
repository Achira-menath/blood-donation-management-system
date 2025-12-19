import React, { useState } from "react";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import "./Search-doner.css";
import heroBg from "../../assets/Searchdoner.jpg";

export default function SearchDonor() {
  const [bloodGroup, setBloodGroup] = useState("");
  const [, setHospital] = useState("");
  const [, setAvailability] = useState("");
  const [loading, setLoading] = useState(false);

  const performSearch = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  };

  return (
    <>
      <HeaderMain />

      {/* HERO */}
      <section
        className="search-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="search-hero-overlay"></div>

        <div className="search-hero-content container">
          <h1 className="search-hero-title">
            Efficiently Connect with Blood<br />
            Donors: Saving Lives Made<br />
            Simpler and Faster
          </h1>

          {/* SEARCH BAR */}
          <div className="search-bar">
            <select
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            >
              <option value="">Blood Group</option>
              <option>A+</option>
              <option>B+</option>
              <option>O+</option>
              <option>AB+</option>
            </select>

            <select onChange={(e) => setHospital(e.target.value)}>
              <option value="">Select Hospital / Blood Bank</option>
              <option>City General Hospital</option>
              <option>Red Cross Center</option>
            </select>

            <select onChange={(e) => setAvailability(e.target.value)}>
              <option value="">Availability</option>
              <option>Immediate</option>
              <option>Scheduled</option>
            </select>

            <button onClick={performSearch}>
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>

        {/* STATS */}
        <div className="search-stats container">
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
      </section>

      <Footer bgColor="#951215" opacity={1} />
    </>
  );
}
