import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home-login/Home-page-AL";
import SearchDonor from "./Pages/Search-doner/Search-doner";
import DonateBlood from "./Pages/Donate/Donate-blood";
import AboutUs from "./Pages/Feedback/Aboutus";
import Contact from "./Pages/Feedback/Contactus";
import Viewprofile from "./Pages/Profile/View-profile"
import Editprofile from "./Pages/Profile/Edit-profile";
import Beforelogin from "./Pages/Home-login/Home-page"

function App() {
  return (
    <BrowserRouter basename="/blood-donation-management-system">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchDonor />} />
        <Route path="/donate" element={<DonateBlood />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Viewprofile" element={<Viewprofile />} />
        <Route path="/Editprofile" element={<Editprofile />} />
        <Route path="/Beforelogin" element={<Beforelogin />} />
        

      </Routes>
    </BrowserRouter>
  );
}
export default App;