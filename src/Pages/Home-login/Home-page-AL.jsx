import React from "react";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <HeaderMain />
      <div style={{ padding: "40px" }}>
        <h1>Welcome to BloodLink</h1>
        <p>Find blood donors quickly and safely using our platform.</p>
      </div>
      <Footer bgColor="#FF0105" opacity={0.5} />
    </>
  );
}


