import React from "react";

const ContactUs = () => {
  return (
    <div className="contactus-container">
      <div className="contact-info">
        <h1>Contact Us </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa a optio,
          adipisci, nobis labore id iusto quas porro quibusdam quam esse
          temporibus cumque voluptatum animi nisi quasi voluptas, quo fugit!
        </p>
      </div>
      <div className="contact-form">
        <div className="form">
          <label> Your Name</label>
          <input type="text" placeholder="Your Name" />
          <label> Phone Number</label>
          <input type="number" placeholder="Your Number" />
          <label>Email</label>
          <input type="text" placeholder="example@gmail.com" />
          <label>Message</label>
          <input type="textarea" placeholder="Type your message here....." />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
