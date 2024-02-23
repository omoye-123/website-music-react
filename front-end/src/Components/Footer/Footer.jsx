import React from "react";
import "./Footer.css";
import { instagramLogo, twitterLogo, facebookLogo } from "../../assets";

const Footer = () => {
  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              Omoye<span className="red">Beats</span>
            </a>

            <div className="social-icons">
              <a href="#">
                <img src={instagramLogo} alt="" />
              </a>
              <a href="#">
                <img src={twitterLogo} alt="" />
              </a>
              <a href="#">
                <img src={facebookLogo} alt="" />
              </a>
            </div>

            <div className="copyright">
              This website is designed by GTCoding Ⓒ 2024
            </div>
          </div>

          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="">08131660596</a>
              </li>
              <li>
                <a href="">joyitua16@gmail.com</a>
              </li>
            </ul>
          </div>
          <div className="copyright mobile">
            This website is designed by Omoyemen Ⓒ 2024
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
