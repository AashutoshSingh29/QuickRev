import React from "react";
import { MdCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  const handelMessageSent = () => {
    var name = document.getElementById("userName").value;
    var email = document.getElementById("userEmail").value;
    var number = document.getElementById("phoneNumber").value;
    var message = document.getElementById("messageContent").value;
    const Response = [
      {
        Name: { name },
        Email: { email },
        Number: { number },
        Message: { message },
      },
    ];
    console.log(Response);
    // alert(name, email, number, message);
    document.getElementById("myForm").reset();
  };

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
        <form id="myForm">
          <div className="myForm">
            <h2>Write to us.....</h2>
            <span>Your Name</span>
            <input type="text" id="userName" placeholder="Full Name" />
            <span>Email</span>
            <input
              type="text"
              id="userEmail"
              placeholder="example@example.com"
            />
            <span>Number</span>
            <input
              type="contact"
              id="phoneNumber"
              placeholder="Contact Number"
            />
            <span>Description</span>
            <input
              type="text"
              id="messageContent"
              placeholder="Type your message here....."
            />
            <button type="button" onClick={handelMessageSent}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
