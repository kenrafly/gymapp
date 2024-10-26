import React from "react";
import linkedin from "../../src/assets/linkedin.png";
import instagram from "../../src/assets/instagram.png";
import github from "../../src/assets/github.png";
import logo from "../../src/assets/logo.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={linkedin} alt="" />
          <a href="https://www.instagram.com/kenrafly/" target="blank">
            <img src={instagram} alt=""></img>
          </a>
          <img src={github} alt="" />
        </div>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
