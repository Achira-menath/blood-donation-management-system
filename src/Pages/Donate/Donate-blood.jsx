import React, { useState } from "react";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";
import "./Donate-blood.css";
import Illustration from "../../assets/donate-blood.png"; // <-- your image

export default function DonateBlood() {
  const [form, setForm] = useState({ id: "", date: "", place: "" });
  const placeholder = "https://via.placeholder.com/420x420?text=Illustration";

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${JSON.stringify(form)}`);
  };

  return (
    <>
      <HeaderMain />
      <div className="donate-page">
        <div className="donate-card">
          <button type="button" className="back-btn" onClick={() => window.history.back()}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M15 18l-6-6 6-6" stroke="#b22222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back Home
          </button>

          <div className="donate-content">
            <div className="donate-form">
              <h2>Donate Blood</h2>
              <p className="subtitle">Register now and become a lifesaver for someone in need.</p>

              <form onSubmit={handleSubmit}>
                <label>
                  ID
                  <input
                    name="id"
                    value={form.id}
                    onChange={handleChange}
                    placeholder="Enter your ID"
                    required
                  />
                </label>

                <label>
                  Date
                  <input
                    name="date"
                    type="date"
                    value={form.date}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  Place
                  <input
                    name="place"
                    value={form.place}
                    onChange={handleChange}
                    placeholder="Enter suitable Place"
                    required
                  />
                </label>

                <p className="note">we will accept your Application and inform you immediately. Thank you.</p>

                <button type="submit" className="submit-btn">Submit</button>
              </form>
            </div>

            <div className="donate-illustration">
              <img src={Illustration} alt="donating" onError={(e) => { e.currentTarget.src = placeholder; }} />
            </div>
          </div>

s
        </div>
      </div>

      <Footer bgColor="#FF0105" opacity={0.5} />
    </>
  );
}
