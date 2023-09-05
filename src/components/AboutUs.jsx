import React, { useEffect } from "react";
import "../css/common.css";
import "../css/about.css";
import AOS from "aos";

const AboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="about">
      <div className="about__left">
        <h3 className="about__title">About us</h3>
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
          className="about__content"
        >
          <span className="text-blue">Offshore Energy Installation</span>
          OEI is your gateway to renewable energy and
          <span className="text-blue">Oil</span> &{" "}
          <span className="text-blue">Gas</span> solutions.
        </h1>
        <p className="about__text-mobile">
          <span className="text-blue">Offshore Energy Installation</span> OEI is
          your gateway to renewable energy and{" "}
          <span className="text-blue">Oil</span> &{" "}
          <span className="text-blue">Gas</span> solutions. We{" "}
          <span className="text-blue">fuse expertise</span> and{" "}
          <span className="text-blue">innovation</span> to deliver top-tier
          Project Management, Engineering, and Construction services. Join us in{" "}
          <span className="text-blue">powering</span> a{" "}
          <span className="text-blue">sustainable future</span>.
        </p>
        <button className="about__button">See more</button>
      </div>
      <div className="about__right">
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="about__right-item-1"
        ></div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="about__right-item-2"
        ></div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="about__right-item-3"
        ></div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="about__right-item-4"
        ></div>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="about__right-item-5"
        ></div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="about__right-item-6"
        ></div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="about__right-item-7"
        ></div>
      </div>
    </div>
  );
};

export default AboutUs;
