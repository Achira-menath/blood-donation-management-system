import React from "react";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <>
      <HeaderMain />
      <div style={{ padding: "40px" }}>
        <h1>Contact</h1>
        <p>Reach us for support, inquiries, or assistance.</p>
      </div>
      <Footer bgColor="#FF0105" opacity={0.5} />
    </>
  );
}
