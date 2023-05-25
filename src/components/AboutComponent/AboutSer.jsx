import React from "react";
import user from "../../assets/user.png";
import circle from "../../assets/circle.png";
import media from "../../assets/media.png";
import { Wrapper, Card, Row, Col } from "../Layouts";
const CardData = [
  {
    src: media,
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quisquam consequatur necessitatibus eaque.Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Quisquam consequatur
                  necessitatibus eaque`,
  },
  {
    src: user,
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quisquam consequatur necessitatibus eaque.Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Quisquam consequatur
                  necessitatibus eaque`,
  },
  {
    src: circle,
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quisquam consequatur necessitatibus eaque.Lorem ipsum dolor,
                  sit amet consectetur adipisicing elit. Quisquam consequatur
                  necessitatibus eaque`,
  },
];
const AboutSer = () => {
  return (
    <>
      <Wrapper bg="#000">
        <div className="container pt-5">
          <div className="d-flex justify-content-center">
            <div className="mm">
              <Wrapper
                color="#fff"
                tt="capitalize"
                weight="bold"
                ls="2px"
                className="fs-1 text-center about-heading"
              >
                technologynsolutions to help businesses <br /> and socities
                flourish
              </Wrapper>
              <Wrapper
                color="#b2abab"
                size="15px"
                className="text-center p-about pt-4"
              >
                tech is a privately owned IT Support and IT Services business.
                Today we’re proud to boast a strong <br /> team of IT engineers
                who thrive on rolling up their sleeves and solving your IT
                problems and meeting your <br /> business needs.
              </Wrapper>
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper width="100%" bg="#000" className="d-grid">
        <Wrapper pt="1rem" className="container row-ser">
          <Row className=" pt-5">
            {CardData.map((val, index) => {
              return (
                <>
                  <Col md={4} className="text-center mb-2 mt-2" key={index}>
                    <Card>
                      <h2 className="text-white">What we do ?</h2>
                      <div className="icon-wrapper">
                        <img src={val.src} alt="" style={{ width: "63px" }} />
                      </div>
                      <p className="pt-4 text-white">{val.desc}</p>
                      <div className="fs-4 text-white">View Our Services</div>
                    </Card>
                  </Col>
                </>
              );
            })}
          </Row>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default AboutSer;
