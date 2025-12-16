import React from "react";
import { Link } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <HeaderMain />
      <div style={{ padding: "40px" }}>
        <Link to="/Beforelogin">
        <h1>Welcome to BloodLink</h1>
        </Link>
        <p>Find blood donors quickly and safely using our platform.</p>
      </div>
      <Footer bgColor="#FF0105" opacity={0.5} />
    </>
  );
}


