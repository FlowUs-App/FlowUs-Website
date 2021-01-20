import React from "react";
import Slick from "react-slick";

function SlickSlider({ children, settings, classes }) {
  return (
    <Slick {...settings} className={classes}>
      {children}
    </Slick>
  );
}

export default SlickSlider;
