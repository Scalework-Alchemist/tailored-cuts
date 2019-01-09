import React from "react";
import HeroLrg from "../heroLrg/HeroLrg";
import AppBar from "../appbar/AppBar";
import "./layout.css"

export default ({ children }) => (
  <div className="app-wrapper">
    <AppBar/>
    <HeroLrg/>
    {children}
    </div>
);
