import React from "react";
import imgdetails from "../../assets/imgdetails.png";
import { Wrapper, Row, Col, useMediaQuery } from "../Layouts";
import { PrimaryBtn } from "../Buttons";
import { H1,P } from "../Typography";
const Details = (props) => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <Wrapper style={{ background: "#000" }}>
      <Wrapper pt="5rem" className="container">
        <Row>
        <Col md={6} data-aos="fade-left">
            <H1
              ls="3px"
              className={`text-white fw-bold ${isResponsive && "text-center"}`}
            >
              {props.title}
            </H1>
            <Wrapper
              size="22px"
              pt="15px"
              color="#16a092"
              className={isResponsive && "text-center"}
            >
              {props.page === "home" && (
                <>
                  {" "}
                  Revolutionize your brand's presence - By{" "}
                  <span className="fw-bold">Tech</span>
                </>
              )}
              {props.page === "services" && (
                <>
                  <span className="fw-bold">
                    Web applications, portable applications, mixed undertakings,
                    and then some.350 + projects | Since 2017
                  </span>
                </>
              )}
            </Wrapper>
            {props.page === "home" && (
              <P
              size="16px"
              color="white"
              pt="20px"
              lh="1.5rem"
              style={{
                textJustify: "distribute-all-lines",
                hyphens: "auto",
                textAlign: "justify",
              }}
              className={isResponsive ? "text-justify":"text-justify"}

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
                  color="white"
                  lHeight="35px"
                  className={`mt-4 ${isResponsive && "ms-4"}`}
                >
                  <li>
                    Advanced tech stack such as
                    Elixir,ruby-on-rails,flutter,kotlin,lonic,mean,python etc{" "}
                  </li>
                  <li>
                    intregration of advanced technologies such as artificial
                    intelligence,big data etc{" "}
                  </li>
                  <li>Daily stand-up meetings with products managers </li>
                  <li>Staffing with 2 weaks </li>
                  <li> try risk free-trial </li>
                </Wrapper>
              </>
            )}

            <PrimaryBtn
              className={`btn ${
                isResponsive &&
                "d-flex flex-row w-100 justify-content-center mb-5"
              }`}
            >
              <a href="#About" className="text-white text-decoration-none">
                {props.btnName}
              </a>
            </PrimaryBtn>
          </Col>
          <Col md={6} data-aos="fade-left">
            {props.page === "home" &&  (
              <Wrapper
                mt={isResponsive ? "2rem":"5rem"}
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
                  <div className="text-center text-white">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </div>
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
