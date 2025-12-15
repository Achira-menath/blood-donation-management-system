import React from "react";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";

export default function DonateBlood() {
  return (
    <>
      <HeaderMain />
      <div style={{ padding: "40px" }}>
        <h1>Donate Blood</h1>
        <p>Register now and become a lifesaver for someone in need.</p>
      </div>
      <Footer bgColor="#FF0105" opacity={0.5} />
    </>
  );
}
