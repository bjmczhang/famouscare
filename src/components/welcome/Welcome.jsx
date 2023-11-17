import React from "react";
import Button from "../button/Button";
import Image from "next/image";

const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welLeft">
        <h3>Welcome</h3>
        <p>
          Welcome to a placewhere diversity is celebrated, and inclusivity is
          our foundation
        </p>
        <Button text="Discover" url="/services" id="2" />
      </div>
      <div className="welCen">
        <h3>Become a Volunteer</h3>
        <p>ImpactLives Through Volunteerism. Your Kindness, Their Hope</p>
      </div>
      <div className="welRight"></div>
    </div>
  );
};

export default Welcome;
