import React from "react";

const HeroBg = () => {
  return (
    <section className="heroBg">
      <div className="overlay"></div>
      <video src={require("/public/assets/heroBg.mp4")} autoPlay loop muted />
    </section>
  );
};

export default HeroBg;
