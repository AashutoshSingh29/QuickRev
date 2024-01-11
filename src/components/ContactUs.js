import React, { useState } from "react";
import { MdCall } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { FaLockOpen } from "react-icons/fa6";

const ContactUs = () => {
  const [visible, setVisible] = useState([false]);
  const [passType, setPassType] = useState(["password"]);

  const handelLockVisibility = () => {
    setVisible(!visible);
    setPassType("text");
  };
  const handelOpenVisibility = () => {
    setVisible(!visible);
    setPassType("password");
  };

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
      <div className="login">
        <div className="login-Container">
          <span className="login-span">Sign In</span>
          <div className="input-box">
            <input
              className="login-input"
              type="text"
              placeholder="Enter Username"
            />
            <FaUser className="icon-login" />
          </div>

          <div className="input-box">
            <input
              className="login-input"
              type={passType}
              placeholder="Enter Password"
            />
            {visible ? (
              <FaLock className="icon-login" onClick={handelLockVisibility} />
            ) : (
              <FaLockOpen
                className="icon-login"
                onClick={handelOpenVisibility}
              />
            )}
          </div>

          <div className="remember">
            <label>
              {" "}
              <input type="checkbox" />
              Remember Me{" "}
            </label>
            <a href="/passwordforgot">Forgot Password?</a>
          </div>

          <button className="login-button">Sign Up</button>

          <div className="register-link">
            <label>Don't have an account?</label>
            <a href="/register-link">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
