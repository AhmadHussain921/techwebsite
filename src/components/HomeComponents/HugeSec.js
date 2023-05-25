import React from "react";
import { Wrapper, useMediaQuery } from "../Layouts";
import { H1 } from "../Typography";
import { PrimaryBtn } from "../Buttons";
const HugeSec = () => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <Wrapper bg="#eeeee4" className="pb-5">
      <Wrapper className="container">
        <H1
          className={`text-black pt-5 display-4 fw-bold ${
            isResponsive && "text-center"
          }`}
        >
          Let's Tell Huge Stories Together
        </H1>
        <Wrapper className="d-flex justify-content-center">
          <Wrapper
            width={isResponsive ? "470px" : "700px"}
            size={isResponsive && "16px"}
            className={`text-black fw-bold pt-3 ${
              isResponsive && "text-center"
            }`}
          >
            Our team is wired up to deliver fully customized software solutions,
            fueled by passion, expertise, and creativity. Let's turn your vision
            into reality with our unwavering commitment to excellence and
            customer satisfaction.
          </Wrapper>
        </Wrapper>
        <PrimaryBtn
          pl="10px"
          pr="10px"
          pt="5px"
          pb="5px"
          width={isResponsive && "100%"}
          className={`btn mt-4 ${
            isResponsive &&
            "d-flex flex-row align-items-center justify-content-center"
          }`}
        >
          <a
            href="#Start"
            className="text-black text-decoration-none"
            style={{ fontWeight: 600 }}
          >
            Explore Opportunities
          </a>
        </PrimaryBtn>
      </Wrapper>
    </Wrapper>
  );
};

export default HugeSec;
