import React from "react";
import "./HeroLrg.css";
import Button from "@material-ui/core/Button";


const style = {
  backgroundColor: "#C59026",
  color: "white",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)"
};

export default () => (
  <div className="wrapper_Hero_LRG" id="showcase">
    {/*  
        one div containing four seperate divs which will be the this from accending order.
        hero_top_img_container this will hold the image
        the second one should the hero-first_line_Quote 
        the third one should the hero-second_line_Quote
        the fourth should be the button 
        styling guide is grid
    */}
    <div className="hero_container bg-image">
      <div className="dummy top" />
      <div className="hero-first_line">
        <h2 className="first_line">YOU NEVER HAVE TO FIT IN WHEN YOU'RE</h2>
      </div>
      <div className="hero-second_line">
        <h1 className="second_line">Tailor Made</h1>
      </div>
      <div className="hero-button_bookNow">
        <Button variant="contained" style={style}>
          BOOK NOW
        </Button>
      </div>
    </div>
  </div>
);
