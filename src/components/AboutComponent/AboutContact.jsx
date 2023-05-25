import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "../Layouts";
import { H4 } from "../Typography";
import { PrimaryBtn } from "../Buttons";
const AboutContact = () => {
  return (
    <>
      <Wrapper bg="#000">
        <div className="container pt-5">
          <div className="d-flex justify-content-center">
            <div className="mm">
              <H4 color="#16a092" className="text-center">
                Let's Started
              </H4>
              <div className="fs-1 about-heading text-white text-center">
                Are you ready for a better,more <br /> productive business ?
              </div>
              <Wrapper color="gray" className="p-about pt-4 text-center">
                Stop worrying about technology problems. Focus on your
                business.Let us <br /> provide the support you deserve.
              </Wrapper>
              <div className="btn-start d-flex justify-content-center">
                <Link>
                  <PrimaryBtn className="rounded btn text-white fs-5 fw-bold">
                    Contact Us{" "}
                  </PrimaryBtn>
                </Link>
              </div>
            </div>
          </div>
          {/* //image section// */}
        </div>
        <Wrapper
          height="400px"
          width="100%"
          mt="5rem"
          bg={`linear-gradient(rgba(0, 0, 0, 0.854), rgba(72, 192, 178, 0.545)),url("https://content.presspage.com/uploads/2429/1920_connectedlaptop.jpg?10000")`}
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="text-center"
        >
          <section class="hero-header"></section>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default AboutContact;
