import React from "react";
import ServiceCard from "../serviceCard/ServiceCard";

const services = [
  {
    id: 1,
    title: "Document Verification Service",
    // url: "/services/web-design",
  },
  {
    id: 2,
    title: "Face Verification Service",
    // url: "/services/web-development",
  },
  {
    id: 3,
    title: "Face Identification Service",
    // url: "/services/mobile-design",
  },
];

const ServiceCardsGroup = () => {
  return (
    <section className="serviceCardsGroup">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          url={service.url}
          title={service.title}
        />
      ))}
    </section>
  );
};

export default ServiceCardsGroup;
