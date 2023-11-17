import React from "react";
import Button from "@/components/button/Button";

const HeroContent = () => {
  return (
    <section className="heroContent">
      <div className="contInfo">
        <h1>Welcome to Famous Care - Empowering Lives</h1>
        <p>
          At Famous Care, we firmly believe that every individual, regardless of
          their abilities, deserves the opportunity to lead a fulfilling life.
          Our core mission is to deliver outstanding disability services that
          empower individuals to live meaningful and enriching lives. We invite
          you to explore our comprehensive range of services, all carefully
          designed to cater to your unique needs.
        </p>
        <div className="buttonGroup">
          <Button text="Contact us" url="/" id="1" />
          <Button text="Discover" url="/services" id="2" />
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
