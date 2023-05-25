import React from "react";
import CareerOpenings from "../components/careerComponents/CareerOpenings";
import Hero from "../components/Common/Hero";
import { Wrapper } from "../components/Layouts";
import IndustriesCard from "../components/Common/IndustriesCard";
import health from "../assets/health.png";
import riding from "../assets/riding.png";
import lunch from "../assets/lunch.png";
import emoji from "../assets/emoji.png";
import flexibility from "../assets/flexibility.png";
const IndustriesCareerData = [
  {
    src: health,
    title: "Health care",
    desc: "No-premium health, dental, and vision benefits, 401K, FSA",
  },

  {
    src: flexibility,
    title: "Flexibility",
    desc: "No-premium health, dental, and vision benefits, 401K, FSA",
  },
  {
    src: lunch,
    title: "Lunch",
    desc: "No-premium health, dental, and vision benefits, 401K, FSA",
  },

  {
    src: emoji,
    title: "Fun",
    desc: "No-premium health, dental, and vision benefits, 401K, FSA",
  },

  {
    src: riding,
    title: "Life style",
    desc: "No-premium health, dental, and vision benefits, 401K, FSA",
  },
];
const CareerPage = () => {
  return (
    <>
      <Hero
        bg="https://www.key.com/content/dam/kco/images/businesses-institutions/industry-expertise/advisor_homepage_cropped.jpg"
        title="Career At tech"
        extra=""
        desc="We help companies reach their full potential. Are you ready to reach yours? Come join us.We help companies reach their full potential."
        contact={false}
        page="about"
      />
      <Wrapper bg="#000">
        <div className="container py-5">
          <div className="text-center text-white fs-1 text-capitalize fw-bold pt-5">
            Lets explore our capabilities together
          </div>
          <Wrapper color="#16a092" className="text-center pt-3">
            The href attribute requires a valid value to be accessible. Provide
            a valid.
          </Wrapper>
        </div>
        <Wrapper
          bg="linear-gradient(90deg,rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url(https://www.rrc.ca/explore/wp-content/uploads/sites/1/sites/98/2022/09/Business-Interest.jpg)"
          style={{ backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
          width="100%"
          height="35vh"
          className="img-career"
        ></Wrapper>
      </Wrapper>

      <CareerOpenings />
      <IndustriesCard data={IndustriesCareerData} page={"career"} />
      {/* <CareerBenefits /> */}
    </>
  );
};

export default CareerPage;
