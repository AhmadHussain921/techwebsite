import React from "react";
import imgdetails from "../../assets/imgdetails.png";
import { Wrapper, Row, Col, SpanWrapper, useMediaQuery } from "../Layouts";
import { PrimaryBtn } from "../Buttons";
import { H1, P } from "../Typography";
const Details = (props) => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <Wrapper style={{ background: "#000" }} width="100%">
      <Wrapper pt="5rem" className="container">
        <Row className="align-items-center">
          <Col md={6} >
            <H1
              size="26px"
              weight="100"
              ls="5px"
              className={`text-white ${isResponsive && "text-center"}`}
            >
              {props.title}
            </H1>
            <Wrapper
              size="32px"
              pt="15px"
              color="#16a092"
              className={isResponsive && "text-center"}
            >
              {props.page === "home" && (
                <>
                  {" "}
                  Revolutionize your brand's presence - By{" "}
                  <SpanWrapper weight="900">tech</SpanWrapper>
                </>
              )}
              {props.page === "services" && (
                <>
                  <span className="fw-bold">
                    Web applications , cross-platform applications ,
                    Decentralized Applications (DApps) , Artificial Intelligence
                    (AI) and Machine Learning (ML) Solutions , and more. &nbsp;
                    &nbsp;|&nbsp;&nbsp; Since 2017
                  </span>
                </>
              )}
            </Wrapper>
            {props.page === "home" && (
              <P
                size="16px"
                color="#bfcdd5"
                pt="20px"
                lh="1.5rem"
                style={{
                  textJustify: "distribute-all-lines",
                  hyphens: "auto",
                  textAlign: "justify",
                }}
                className={isResponsive ? "text-justify" : "text-justify"}
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
              </P>
            )}
            {props.page === "services" && (
              <>
                <Wrapper
                  color="#bfcdd5"
                  fontFamily="Tinos, serif"
                  lHeight="35px"
                  size="16px"
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
              className={`btn ${
                isResponsive &&
                "d-flex flex-row w-100 justify-content-center mb-5"
              }`}
            >
              <a href="#About" className="text-white text-decoration-none px-3">
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
                <img src={imgdetails} alt="Image for tech" className="w-100 " />
              </Wrapper>
            )}
            {props.page === "services" && (
              <Wrapper
                bg="#16a092"
                className="w-100 p-5 h-100 d-flex justify-content-center align-items-center"
              >
                <div>
                  <h1 className="text-center display-5 fw-bold text-white">
                    GROW YOUR BUSSINESS
                  </h1>

                  <Wrapper
                    fontFamily="Tinos, serif"
                    className="text-center text-white"
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
