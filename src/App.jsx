import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home-login/Home-page";
import SearchDonor from "./Pages/Search-doner/Search-doner";
import DonateBlood from "./Pages/Donate/Donate-blood";
import AboutUs from "./Pages/Feedback/Aboutus";
import Contact from "./Pages/Feedback/Contactus";

function App() {
  return (
    <BrowserRouter basename="/blood-donation-management-system">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchDonor />} />
        <Route path="/donate" element={<DonateBlood />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;