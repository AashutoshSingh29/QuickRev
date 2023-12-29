import React from "react";
import IntroCard from "./IntroCard";

const AboutUs = () => {
  return (
    <>
      <div className="aboutUsContent">
        <div className="containerCrousal ">
          <img
            className="bannerImage"
            src="/blackWall.jpg"
            alt="Crousal"
            width={`100%`}
            height={`50%`}
          />
        </div>
        <section>
          <h1 className="aboutUsParaHeading">About Quick-Rev</h1>
          <p className="aboutUsPara">
            Welcome to QuickRev, the ultimate destination for college students
            gearing up for interviews. At QuickRev, our mission is clear: we aim
            to be your reliable companion during those crucial last-minute
            revision sessions. We understand the significance of interviews, and
            that's why we've curated a platform focused on simplifying
            fundamental yet frequently asked topics across a range of subjects.
            Whether you're preparing for a technical interview or revising
            general knowledge, QuickRev has you covered. Our materials are
            designed to be concise, clear, and tailored to meet the unique needs
            of college students facing interviews. We believe in the power of
            efficient and quality revision to boost confidence and performance.
            Join QuickRev, and let's embark on this journey of last-minute
            success together!
          </p>
        </section>
        <IntroCard></IntroCard>
      </div>
    </>
  );
};

export default AboutUs;
