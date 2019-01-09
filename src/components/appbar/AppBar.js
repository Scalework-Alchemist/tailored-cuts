import React, { Component } from "react";
import { Link } from "gatsby";
import "./AppBar.css";

let buttoncontainer = (
  <div className="button_container">
    <div className=" sec_1">
      <Link
        className="button_link"
        to="/BookNow"
        activeStyle={{
          borderBottom: "2px solid #C59026"
        }}
      >
        BOOK NOW
      </Link>
    </div>
    <div className=" sec_2">
      <Link
        className="button_link"
        to="/Location"
        activeStyle={{
          borderBottom: "2px solid #C59026"
        }}
      >
        LOCATION
      </Link>
    </div>
    <div className=" sec_3">
      <Link
        className="button_link"
        to="/OnlineStore"
        activeStyle={{
          borderBottom: "2px solid #C59026"
        }}
      >
        ONLINE STORE
      </Link>
    </div>
    <div className=" sec_4">
      <Link
        className="button_link"
        to="/ContactUs"
        activeStyle={{
          borderBottom: "2px solid #C59026"
        }}
      >
        CONTACT US
      </Link>
    </div>
    <div className=" sec_5">
      <Link
        className="button_link"
        to="/OurStory"
        activeStyle={{
          borderBottom: "2px solid #C59026"
        }}
      >
        OUR STORY
      </Link>
    </div>
  </div>
);
let logocontainer = (
  <div className="logo_container">
    <div className="dummy" />
    <div className="logo_div">
      <img className="logo_asset" id="logo_small"src="/assets/logo.png" alt="" />
    </div>
    <div className="dummy" />
  </div>
);

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-160px";
  }
  prevScrollpos = currentScrollPos;
}


class AppBar extends Component {
  render() {
    return (
      <nav className="nav_container" id="navbar">
        {buttoncontainer}
        {logocontainer}
      </nav>
    );
  }
}
export default AppBar;
