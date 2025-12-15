import React from "react";
import HeaderMain from "../../components/HeaderMain";
import Footer from "../../components/Footer";

export default function SearchDonor() {
  return (
    <>
      <HeaderMain />
      <div style={{ padding: "40px" }}>
        <h1>Search Donor</h1>
        <p>Search for blood donors by group, city, or district.</p>
      </div>
      <Footer bgColor="#FF0105" opacity={0.5} />
    </>
  );
}