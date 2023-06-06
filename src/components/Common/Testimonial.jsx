import React from "react";
import karl from "../../assets/karl.png";
import devid from "../../assets/devin.jpg";
import styled from "styled-components";
import { PrimaryBtn } from "../Buttons";
import { Wrapper, SpanWrapper, useMediaQuery } from "../Layouts";
import { P,H1, H2 } from "../Typography";
const TestimonialSection = styled.section`
  display: grid;
  place-items: center;
  background: linear-gradient(177deg, rgb(0, 0, 0) 40%, rgb(10, 83, 83) 100%);
`;
const TestimonialData = [
  {
    src: devid,
    title: "Devlin",
    desc: "I wanted to thank you all and the team for the great work on RobotDrop.Fun. It's a great site and works well now on Polygon. I have some work to do to finish the content site, robotdrop.nft, and upload/create the RobotDrop NFT collection for promoting the DEX, but overall, the functionality is working great and I am very impressed by the skills and commitment of this team!",
  },
  {
    src: karl,
    title: "Karl",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a eius excepturi molestias commodi aliquam error magnam consectetur laboriosam numquam, minima eveniet nostrum sequi saepe ipsam non ea, inventore tenetur! Corporis commodi consequatur molestiae voluptatum!",
  },

  {
    src: "https://images.unsplash.com/photo-1586796676792-20fbdf87659e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
    title: "Stephen Jones",
    desc: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a eius excepturi molestias commodi aliquam error magnam consectetur laboriosam numquam, minima
                            eveniet nostrum sequi saepe ipsam non ea, inventore
                            tenetur! Corporis commodi consequatur molestiae
                            voluptatum!`,
  },
];
const Testimonial = () => {
  const isResponsive = useMediaQuery({
    query: "(max-width: 753px)",
  });
  return (
    <>
      <TestimonialSection>
        <div className="container">
          <Wrapper className="container">
        <H1
         size="45px"
          data-aos="fade-down"
          className={`text-white pt-5 display-4 fw-bold ${
            isResponsive && "text-center"
          }`}
        >
          Let's Tell Huge Stories Together
        </H1>
        <Wrapper
          className="d-flex justify-content-center"
          data-aos="fade-down"
        >
          <Wrapper
              width={isResponsive ? "470px" : "600px"}
              size={"18px"}
            color="#FFF"
            className={`pt-4 ${isResponsive && "text-center"}`}
          >
            Our team is wired up to deliver fully customized software solutions,
            fueled by passion, expertise, and creativity. Let's turn your vision
            into reality with our unwavering commitment to excellence and
            customer satisfaction.
          </Wrapper>
        </Wrapper>
        <PrimaryBtn
         data-aos="zoom-in"
         pl="30px"
         pr="30px"
         pt="7px"
         pb="7px"
          width={isResponsive && "100%"}
          className={`btn mt-4 ${
            isResponsive &&
            "d-flex flex-row align-items-center justify-content-center"
          }`}
        >
          <a
            href="#Start"
            className="text-white text-decoration-none"
            style={{ fontWeight: 600 }}
          >
            Explore Opportunities
          </a>
        </PrimaryBtn>
      </Wrapper>
          <div className="testimonials">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner mb-5">
                {/* Items  */}
                {TestimonialData.map((val, index) => {
                  return (
                    <>
                      <div
                        className={`carousel-item ${index === 0 && "active"}`}
                      >
                        <Wrapper color="white" p="15px" m="50px 15px">
                          <Wrapper className="row align-items-center">
                            <div className="col-md-5">
                              <Wrapper
                                mb="30px"
                                className="profile text-center"
                              >
                                <div m="0 15px 15px 15px" className="img-area">
                                  <img
                                    width="200px"
                                    height="200px"
                                    style={{
                                      borderRadius: "50%",
                                      border: "3px solid #16a092",
                                    }}
                                    src={val.src}
                                    alt=""
                                  />
                                </div>
                                <Wrapper className="bio pt-4">
                                  <H2 ls="1px" size="26px" weight="600">
                                    {val.title}
                                  </H2>
                                </Wrapper>
                              </Wrapper>
                            </div>
                            <Wrapper
                              width={isResponsive && "100%"}
                              className={`col-md-6 ${
                                isResponsive && "text-center"
                              }`}
                            >
                              <Wrapper size="18px" className="content">
                                <P
                                  className="text-justify"
                                 // fontFamily="Tinos, serif"
                                  size="18px"
                               // ls="1.5px"
                               lHeight="26px"
                                >
                                  <SpanWrapper
                                    color="#16a092"
                                    size="24px"
                                    mr="20px"
                                  >
                                    <i className="fa fa-quote-left"></i>
                                  </SpanWrapper>
                                  {val.desc}
                                </P>
                              </Wrapper>
                            </Wrapper>
                          </Wrapper>
                        </Wrapper>
                      </div>
                    </>
                  );
                })}
              </div>
              <button
                className={`carousel-control-prev`}
                style={{ width: "40px" }}
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
              >
                <SpanWrapper
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></SpanWrapper>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                  className={`carousel-control-next`}
                style={{ width: "40px" }}
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
              >
                <SpanWrapper
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></SpanWrapper>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </TestimonialSection>
    </>
  );
};

export default Testimonial;
