import React from "react";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";

export default function Viewprofile() {
  return (
    <>
      <HeaderMain />
      <div style={{ padding: "40px" }}>
        <h1>Welcome to profile</h1>
        <p>edite everything.</p>
      </div>
      <Footer bgColor="#030000" opacity={0.6} />
    </>
  );
}

