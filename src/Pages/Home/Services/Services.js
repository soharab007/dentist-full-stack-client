import React from "react";
import Fluoride from "../../../assets/images/fluoride.png";
import Cavity from "../../../assets/images/cavity.png";
import Whitening from "../../../assets/images/whitening.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesData = [
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride varnish is a dental treatment that can help prevent tooth decay, slow it down, or stop it from getting worse.",
      img: Fluoride,
    },
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride varnish is a dental treatment that can help prevent tooth decay, slow it down, or stop it from getting worse.",
      img: Cavity,
    },
    {
      id: 1,
      name: "Fluoride Treatment",
      description:
        "Fluoride varnish is a dental treatment that can help prevent tooth decay, slow it down, or stop it from getting worse.",
      img: Whitening,
    },
  ];
  return (
    <div className="mt-16">
      <div className="text-center">
        <h3 className="text-xl font-bold uppercase text-primary">
          Our Services
        </h3>
        <h2 className="text-3xl ">Services We Provide</h2>
      </div>
      <div className="grid gap-8 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
