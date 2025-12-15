import React from "react";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";

export default function AboutUs() {
  return (
    <>
      <HeaderMain />
      <div style={{ padding: "40px" }}>
        <h1>About Us</h1>
        <p>We are committed to connecting blood donors and patients.</p>
      </div>
      <Footer bgColor="#FF0105" opacity={0.5} />
    </>
  );
}
