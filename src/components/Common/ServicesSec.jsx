import React from "react";

import { Wrapper, useMediaQuery, Card } from "../Layouts";
import { H2, H3, P } from "../Typography";
import styled from "styled-components";
const SectionStyle = styled.section`
  width: 100%;
  display: grid;
  place-items: center;
  background: #000;
  padding: ${(props) => (props.p ? props.p : "")};
`;

const ServicesSec = (props) => {
  const isResponsive = useMediaQuery({
    query: "(min-width: 768px)",
  });
  const isResponsiveMore = useMediaQuery({
    query: "(min-width: 992px)",
  });
  return (
    <>
      <SectionStyle p={isResponsive && "0 2rem"}>
        <Wrapper pt="5rem" className="container">
          {props.page === "home" && (
            <>
              <Wrapper
                width="100%"
                className="d-flex flex-wrap justify-content-center pb-5"
              >
                <H2 ls="3vpx" className="text-center text-white fw-bold fs-1 ">
                  {" "}
                  What we do ?
                </H2>
                <div className="what d-flex justify-content-center mt-4">
                  <P size="17px" color="white" className=" w-75 text-center">
                    We collaborate closely with clients, combining industry best
                    practices and advanced technologies to deliver exceptional,
                    scalable, and cost-effective results. 
                  </P>
                </div>
              </Wrapper>
            </>
          )}
          <Wrapper className="d-flex flex-wrap">
            {props.data.map((val, index) => {
              return (
                <>
                  <Wrapper
                    key={index}
                    maxW={
                      (isResponsiveMore && "0 0 33.33%") ||
                      (isResponsive && "50%")
                    }
                    flex={
                      (isResponsiveMore && " 33.33%") ||
                      (isResponsive && "0 50%")
                    }
                    width={!isResponsive && !isResponsiveMore && "100%"}
                    p="0 1em 1em 1em"
                    className="text-center"
                  >
                    <Card>
                      {props.page === "contact" ? (
                        <>
                          <H2
                            size="26px"
                            weight="600"
                            color="white"
                            margin="1rem 0"
                            ls="3px"
                            className="text-white"
                          >
                            {val.title}
                          </H2>
                          <P
                            className="mt-4"
                            color="white"
                            weight="600"
                            size="15px"
                            lHeight="1.6"
                            ls="0.03em"
                          >
                            {val.desc}
                          </P>
                          <div className="icon-wrapper pt-2 pb-2">
                            <img
                              src={val.src}
                              alt=""
                              style={{ width: "63px" }}
                            />
                          </div>

                          <H3
                            className="text-white mt-3"
                            weight="bold"
                            size="24px"
                            lHeight="1.6"
                            ls="0.03em"
                          >
                            {val.help}
                          </H3>
                        </>
                      ) : (
                        <>
                          <div className="icon-wrapper">
                            <img
                              src={val.src}
                              alt=""
                              style={{ width: "63px" }}
                            />
                          </div>
                          <H3
                            size="20px"
                            weight="600"
                            color="white"
                            margin="1rem 0"
                            ls="3px"
                            className="text-white"
                          >
                            {val.title}
                          </H3>
                          <P
                            className="text-white"
                            color="white"
                            size="15px"
                            lHeight="1.6"
                            ls="0.03em"
                          >
                            {val.desc}
                          </P>
                        </>
                      )}
                    </Card>
                  </Wrapper>
                </>
              );
            })}
          </Wrapper>
        </Wrapper>
      </SectionStyle>
    </>
  );
};

export default ServicesSec;
