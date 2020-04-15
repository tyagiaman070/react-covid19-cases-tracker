import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-ML">
      <center>
        <span className="devhead">Developer Team Information</span>
        <br />
        <br />
        <span className="devaman">
          <span className="devname">Name : Aman Tyagi</span>
          <br />
          <span className="devmail">
            Gmail :
            <a href="mailto:tyagi.aman070@gmail.com">tyagi.aman070@gmail.com</a>
          </span>
          <br />
        </span>
        <br />
        <span className="devharsh">
          <span className="devname">Name : Harsh Agarwal</span>
          <br />
          <span className="devmail">
            Gmail :
            <a href="mailto:agarwalharshu24@gmail.com">
              agarwalharshu24@gmail.com
            </a>
          </span>
        </span>
      </center>
    </div>
  );
};

export default Footer;
