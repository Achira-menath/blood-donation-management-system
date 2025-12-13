import React from "react";
import Header from "../../components/Header";

export default function SearchDonor() {
  return (
    <>
      <Header />
      <div style={{ padding: "40px" }}>
        <h1>Search Donor</h1>
        <p>Search for blood donors by group, city, or district.</p>
      </div>
    </>
  );
}