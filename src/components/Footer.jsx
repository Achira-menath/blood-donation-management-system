import React from "react";

/**
 * Reusable Footer Component
 * @param {string} bgColor - Background color
 * @param {number} opacity - Opacity value (0 to 1)
 * @param {string} text - Footer text
 */
const Footer = ({
  bgColor = "#FF0105",
  opacity = 0.5,
  text = "Copyright © 2025 – National Blood Transfusion Service – All Rights Reserved",
}) => {
  return (
    <footer style={{ width: "100%" }}>
      <div
        style={{
          backgroundColor: bgColor,
          opacity: opacity,
          color: "white",              // ✅ white text
          padding: "10px 0",           // give some vertical room for the text
          display: "flex",             // ✅ center text
          alignItems: "center",         // vertical center
          justifyContent: "center",     // horizontal center
          textAlign: "center",
          fontSize: "14px",
          borderRadius: 0,               // flush edge-to-edge
        }}
      >
        {text}
      </div>
    </footer>
  );
};

export default Footer;
