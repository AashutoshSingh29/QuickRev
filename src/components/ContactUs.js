import React from "react";
import { MdCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="block">
        <div className="box">
          <div className="icon-back">
            <MdCall size={30} color="rgb(49, 115, 239)" />
          </div>
          <p>+91 94565 86457</p>
        </div>
        <div className="box">
          <div className="icon-back">
            <CiMail size={30} color="rgb(49, 115, 239)" />
          </div>
          <p>quickrev@gmail.com</p>
        </div>
        <div className="box">
          <div className="icon-back">
            <FaLocationDot size={30} color="rgb(49, 115, 239)" />
          </div>
          <p>Kattigenahalli, Bengaluru-560064</p>
        </div>
      </div>
      <div className="form-section">
        <div className="form">
          <h2>Write to us.....</h2>
          <span>Your Name</span>
          <input type="text" placeholder="Full Name" />
          <span>Email</span>
          <input type="text" placeholder="example@example.com" />
          <span>Number</span>
          <input type="contact" placeholder="Contact Number" />
          <span>Description</span>
          <input type="text" placeholder="Type your message here....." />
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
