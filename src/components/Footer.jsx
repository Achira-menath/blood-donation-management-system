import React from "react";
import "./Footer.css";

/**
 * Site Footer matching Figma design
 * Shows a stats strip and a red copyright bar
 */
const Footer = ({
  bgColor = "#B21212", // bottom bar default (overrideable by pages)
  opacity = 1,
  copyright = "Copyright © 2025 – National Blood Transfusion Service – All Rights Reserved",
}) => {
  const stats = [
    { value: "10,000+", label: "Registered Donor" },
    { value: "500+", label: "Partner Hospital" },
    { value: "50,000+", label: "Lives Saved" },
    { value: "5 min", label: "Average Response Time" },
  ];

  return (
    <footer className="site-footer">
      <div className="footer-stats">
        <div className="footer-stats-inner">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom" style={{ backgroundColor: bgColor, opacity }}>
        <div className="footer-bottom-inner">{copyright}</div>
      </div>
    </footer>
  );
};

export default Footer;
