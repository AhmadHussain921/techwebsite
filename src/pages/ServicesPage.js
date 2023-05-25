import React from "react";
import Testimonial from "../components/Common/Testimonial";
import ServicesSec from "../components/Common/ServicesSec";
import Hero from "../components/Common/Hero";
import Details from "../components/Common/Details";
import blockchain from "../assets/blockchain.png";
import ai from "../assets/ai.png";
import datasci from "../assets/datasci.png";
import devops from "../assets/devops.png";
import iot from "../assets/iot.png";
import ecommerce from "../assets/ecommerce.png";
const ServiceCardsData = [
  {
    src: blockchain,
    title: "Blockchain Web3",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quisquam consequatur necessitatibus eaque.",
  },
  {
    src: ai,
    title: "Artificial Intelligence",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quisquam consequatur necessitatibus eaque",
  },
  {
    src: devops,
    title: "DevOps",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quisquam consequatur necessitatibus eaque",
  },
  {
    src: datasci,
    title: "Data Science",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consequatur necessitatibus eaque.",
  },
  {
    src: ecommerce,
    title: "Ecommerce",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quisquam consequatur necessitatibus eaque.",
  },
  {
    src: iot,
    title: "Internet of things",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Quisquam consequatur necessitatibus eaque.",
  },
];
const ServicesPage = () => {
  return (
    <>
      <Hero
        bg="https://learnenglish.britishcouncil.org/sites/podcasts/files/RS8118_GettyImages-935659716-hig.jpeg"
        extra=""
        title="Services"
        desc="We specialize in delivering enterprise-level support worthy of a Fortune 500 company"
        contact={false}
      />
      <Details
        title="Custom Software Development Services"
        page="services"
        btnName="Let' talk"
      />
      <ServicesSec data={ServiceCardsData} heading={false} />
      <Testimonial />
    </>
  );
};

export default ServicesPage;
