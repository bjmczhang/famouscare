import React from "react";
import { FaPersonRays } from "react-icons/fa6";
import { FaPersonShelter } from "react-icons/fa6";

import { MdWheelchairPickup } from "react-icons/md";

const ServiceSection = () => {
  return (
    <div className="serviceSection">
      <div className="serviceSectionBg"></div>
      <div className="content">
        {" "}
        <h5>What we do</h5>
        <h3>We do it for People in Need</h3>
      </div>
      <div className="iconGroup">
        <div className="iconCard">
          <FaPersonRays size={60} color="#8fc229" />
          <h4>Assist Personal Activity High</h4>
          <p>
            At Famous Care, we offer personalized assistance with activities of
            daily living, including personal hygiene, dressing, grooming, and
            feeding. We understand the challenges you face, and we're here to
            help.
          </p>
        </div>
        <div className="iconCard">
          <FaPersonShelter size={60} color="#8fc229" />
          <h4>Assist-Life Stage, Transition</h4>
          <p>
            Our team provides life transition planning, mentoring, peer support,
            and individual skill development. We assist with decision-making,
            daily planning, and budgeting, ensuring you're prepared for the
            journey ahead.
          </p>
        </div>
        <div className="iconCard">
          <MdWheelchairPickup size={68} color="#8fc229" />

          <h4>Assist-Travel/Transport</h4>
          <p>
            Our safe and convenient transport services make it easy for you to
            reach work, school, shopping centers, medical appointments, and
            social outings. Choose from weekly or daily trips for greater
            mobility and independence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
