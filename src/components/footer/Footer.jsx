import Image from "next/image";
import React from "react";
import LogoWhite from "/public/assets/logo-white.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="wrapper">
          <div className="left">
            <div className="logo">
              <Image src={LogoWhite} />
            </div>
            <div>
              <p>
                At Famous Care, we firmly believe that every individual,
                regardless of their abilities, deserves the opportunity to lead
                a fulfilling life. Our core mission is to deliver outstanding
                disability services that empower individuals to live meaningful
                and enriching lives. We invite you to explore our comprehensive
                range of services, all carefully designed to cater to your
                unique needs.
              </p>
            </div>
          </div>
          <div className="mid">
            <h4>Our Services</h4>
            <ul>
              <li>Assist Personal Activity High</li>
              <li>Assist-Life Stage, Transition</li>
              <li>Assist-Travel/Transport</li>
            </ul>
          </div>
          <div className="right">
            <h4>Contact Us</h4>
            <ul>
              <li>+01 234 567 890</li>
              <li>info@famouscare.com.au</li>
              <li>Open Hours: Mon - Fri 8.00 am - 6.00 pm</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="wrapper">
          <p>Copyright © 2023 famous care. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
