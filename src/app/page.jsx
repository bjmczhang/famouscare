import AboutUs from "@/components/aboutUs/AboutUs";
import Footer from "@/components/footer/Footer";
import HeroBg from "@/components/heroBg/HeroBg";
import HeroContent from "@/components/heroContent/HeroContent";
import ServiceSection from "@/components/serviceSection/ServiceSection";
import Welcome from "@/components/welcome/Welcome";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeroBg />
      <HeroContent />

      <Welcome />
      <AboutUs />
      <ServiceSection />
    </div>
  );
};

export default Home;
