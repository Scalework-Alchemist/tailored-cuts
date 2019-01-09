import React from "react";
import HeroLrg from "../heroLrg/HeroLrg";
import AppBar from "../appbar/AppBar";
import Gmap from "../gMaps/Gmap";
import "./layout.css";
// import BookNow from "../Content/Content";
// import OnlineStore from "../Content/Content";
// import Location from "../Content/Content";
// import ContactUs from "../Content/Content";

export default ({children}) => (
  <div className="app-wrapper">
    <AppBar />
    <HeroLrg />
    {children}
  </div>
);
