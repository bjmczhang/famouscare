import Image from "next/image";
import React from "react";
import aboutImg from "/public/assets/aboutUs.jpeg";
import Button from "../button/Button";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="content">
        {" "}
        <h5>About Us</h5>
        <h3>Help People,</h3>
        <h3>Our Main Goals</h3>
        <p>
          Our mission is clear - to provide unwavering support, encouragement,
          and care to individuals with disabilities, fostering their
          independence, and enabling them to embrace life's opportunities with
          confidence.
        </p>
        <Button text="More about" url="/about" id="1" />
      </div>
      <div className="image">
        <Image src={aboutImg} alt="" />
      </div>
    </div>
  );
};

export default AboutUs;
