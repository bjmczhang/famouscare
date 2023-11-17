import Image from "next/image";
import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const ServiceCard = ({ id, url, title }) => {
  return (
    <div className="serviceCard">
      <Image src={url} alt={id} />
      <h4>{title}</h4>
      <IoIosReturnRight size={36} />
    </div>
  );
};

export default ServiceCard;
