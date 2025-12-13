import React from "react";
import Header from "../../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div style={{ padding: "40px" }}>
        <h1>Welcome to BloodLink</h1>
        <p>Find blood donors quickly and safely using our platform.</p>
      </div>
    </>
  );
}

