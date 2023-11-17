import Link from "next/link";
import React from "react";

import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidEnvelope } from "react-icons/bi";
import { BsClockFill } from "react-icons/bs";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarBg"></div>
      <div className="contactInfo">
        <div className="phoneNumber">
          <BsFillTelephoneFill />
          <a href="tel:(03) 9815 6868">+01 234 567 890</a>
        </div>
        <div className="email">
          <BiSolidEnvelope className="topbarIcon" />
          <a href="mailto:info@ib.com.au">info@famouscare.com.au</a>
        </div>
      </div>
      <div className="openHours">
        <BsClockFill className="topbarIcon" />
        <p>Open Hours: Mon - Fri 8.00 am - 6.00 pm</p>
      </div>
    </div>
  );
};

export default Topbar;
