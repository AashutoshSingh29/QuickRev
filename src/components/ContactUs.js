import React from "react";
import { MdCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="block">
        <div className="box">
          <MdCall size={32} color="rgb(49, 115, 239)" />
          <p>+91 94565 86457</p>
        </div>
        <div className="box">
          <CiMail size={32} color="rgb(49, 115, 239)" />
          <p>quickrev@gmail.com</p>
        </div>
        <div className="box">
          <FaLocationDot size={32} color="rgb(49, 115, 239)" />
          <p>Kattigenahalli, Bengaluru-560064</p>
        </div>
      </div>
      <div className="form">Hello World</div>
    </div>
  );
};

export default ContactUs;
