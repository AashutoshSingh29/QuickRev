import React from "react";
import AnimatedIcon from "./AnimatedIcon";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="container">
      <footer>
        <div className="footer-content contact">
          <h3>Contact Us.</h3>
          <p>Email: quickrev@gmail.com</p>
          <p>Phone: +91 94565 86457</p>
        </div>
        <div className="footer-content social">
          <h3>Follow Us on:</h3>
          <p>
            <FaInstagram /> Instagram
          </p>
          <p>
            <IoLogoGithub /> github
          </p>
        </div>
        <div className="footer-content quick-links">
          <h3>Quick Links</h3>
          <Link to="/"> Home</Link>
          <Link to="/aboutus">About Us </Link>
        </div>
        <div className="footer-content social">{<AnimatedIcon />}</div>
      </footer>
    </div>
  );
};

export default Footer;
