import React from "react";
import imgdetails from "../../assets/imgdetails.png";
import { Wrapper, Row, Col, SpanWrapper, useMediaQuery } from "../Layouts";
import { PrimaryBtn } from "../Buttons";
import { H1 } from "../Typography";
const Details = (props) => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <Wrapper style={{ background: "#000" }} width="100%">
      <Wrapper pt="5rem" className="container">
        <Row className="align-items-center">
          <Col md={6}>
            {props.page === "home" && (
              <>
                {" "}
                <H1
                  size="45px"
                  className={`text-white ${isResponsive && "text-center"}`}
                >
                  {props.title}
                </H1>
              </>
            )}
            {props.page === "services" && (
              <>
                {" "}
                <H1
                  size="48px"
                  className={`text-white ${isResponsive && "text-center"}`}
                >
                  {props.title}
                </H1>
              </>
            )}
            <Wrapper
              size="32px"
              color="#16a092"
              weight="600"
              className={isResponsive && "text-center"}
            >
              {props.page === "home" && (
                <>
                  {" "}
                  Revolutionize your brand's presence
                </>
              )}
              {props.page === "services" && (
                <>
                  <SpanWrapper size="19px" className="fw-bold">
                    Web applications , cross-platform applications ,
                    Decentralized Applications (DApps) , Artificial Intelligence
                    (AI) and Machine Learning (ML) Solutions , and more. &nbsp;
                    &nbsp;|&nbsp;&nbsp; Since 2017
                  </SpanWrapper>
                </>
              )}
            </Wrapper>
            {props.page === "home" && (
              <Wrapper
                size="18px"
                color="#bfcdd5"
                pt="10px"
                lh="1.5rem"
                className={`${isResponsive && "text-center"}`}
                style={{
                  textJustify: "distribute-all-lines",
                  hyphens: "auto",
                  textAlign: "justify",
                }}
                width={isResponsive ? "100%" : "90%"}
                weight="300"
              >
                Empowering businesses with transformative software solutions and
                driving growth. Our agile teams, custom software, blockchain
                solutions, and E-Commerce websites have contributed to a
                remarkable 300% increase in business growth. We specialize in
                delivering tailored services that combine industry expertise
                with cutting-edge technologies, ensuring high-quality and
                scalable solutions. With a focus on agility and adaptability,
                Techilab is committed to helping businesses thrive in today's
                digital landscape and achieve remarkable results.
              </Wrapper>
            )}
            {props.page === "services" && (
              <>
                <Wrapper
                  color="#bfcdd5"
                  lHeight="35px"
                  size={isResponsive ? "16px" : "18px"}
                  className={`mt-4 ${isResponsive && "ms-4"}`}
                >
                  <li>Drive innovation and stay ahead in your industry. </li>
                  <li>
                    Gain a competitive edge through customized software
                    solutions.{" "}
                  </li>
                  <li>
                    Maximize productivity and profitability with custom software
                    solutions.
                  </li>
                  <li>
                    Accelerate industry-specific growth with custom software.
                  </li>
                  <li>
                    {" "}
                    Leverage industry-specific expertise in software
                    development.
                  </li>
                </Wrapper>
              </>
            )}

            <PrimaryBtn
              pt="7px"
              pb="7px"
              className={`btn ${
                isResponsive &&
                "d-flex flex-row w-100 justify-content-center mb-5"
              }`}
            >
              <a href="#About" className="text-white text-decoration-none px-4">
                {props.btnName}
              </a>
            </PrimaryBtn>
          </Col>
          <Col md={6} data-aos="flip-left">
            {props.page === "home" && (
              <Wrapper
                mt={isResponsive ? "2rem" : "5rem"}
                className="d-flex justify-content-end"
              >
                <img src={imgdetails} alt="tech" className="w-100 " />
              </Wrapper>
            )}
            {props.page === "services" && (
              <Wrapper
                bg="#16a092"
                className="w-100 p-5 h-100 d-flex justify-content-center align-items-center"
              >
                <div>
                  <H1
                    size="48px"
                    className="text-center display-5 fw-bold text-white"
                  >
                    GROW YOUR BUSSINESS
                  </H1>

                  <Wrapper
                    size="18px"
                    weight="500"
                    lHeight="31px"
                    className="text-center text-white mb-3 mt-3"
                    style={{
                      textJustify: "distribute-all-lines",
                      hyphens: "auto",
                      textAlign: "justify",
                    }}
                  >
                    Don't let your competitors surge ahead while you lag behind.
                    It's time to seize the opportunity to expand your horizons,
                    increase your market share, and skyrocket your profits. With
                    our strategic expertise and innovative technology, we'll
                    equip you with the tools you need to outperform the
                    competition, unlock new avenues of growth, and transform
                    your business into an unstoppable force.
                  </Wrapper>
                </div>
              </Wrapper>
            )}
          </Col>
        </Row>
      </Wrapper>
    </Wrapper>
  );
};

export default Details;
