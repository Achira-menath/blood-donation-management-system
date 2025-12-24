import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Beforehome from "./Pages/Home-login/Home-page";
import Home from "./Pages/Home-login/Home-page-AL";
import SearchDonor from "./Pages/Search-doner/Search-doner";
import DonateBlood from "./Pages/Donate/Donate-blood";
import AboutUs from "./Pages/Feedback/Aboutus";
import Contact from "./Pages/Feedback/Contactus";
import Viewprofile from "./Pages/Profile/View-profile";
import Editprofile from "./Pages/Profile/Edit-profile";
import Beforelogin from "./Pages/Home-login/Home-page";
import Login from "./Pages/Home-login/Login";
import Signup from "./Pages/Home-login/Signup";
import Feedback from "./Pages/Feedback/Contact-feedback";
import Feedbackthanks from "./Pages/Feedback/feedback-thank";
import Donatebloodconfirm from "./Pages/Donate/Donateconfirm";
import Signupthank from "./Pages/Home-login/Thank-for-register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Beforehome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<SearchDonor />} />
        <Route path="/donate" element={<DonateBlood />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/viewprofile" element={<Viewprofile />} />
        <Route path="/editprofile" element={<Editprofile />} />
        <Route path="/beforelogin" element={<Beforelogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/feedbackthanks" element={<Feedbackthanks />} />
        <Route path="/donateconfirm" element={<Donatebloodconfirm />} />
        <Route path="/signupthank" element={<Signupthank />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
