import React from "react";
import { Wrapper } from "../Layouts";
import styled from "styled-components";
const LetTalkStyle = styled.div`
  border: 2px solid #16a092;
  transition: 0.8s ease-in-out;
  a {
    color: white;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 2px;
  }
  &:hover {
    background: var(--primary-color);
  }
`;
const LetsTalk = () => {
  return (
    <Wrapper bg="#000">
      <Wrapper pt="5rem" pb="5rem" className="container">
        <Wrapper
          color="#16a092"
          weight="bold"
          ls="3px"
          className="text-center fs-1"
        >
          Want to higher a dedicated developer ?
        </Wrapper>
        <div className="d-flex justify-content-center mt-4 ">
          <LetTalkStyle className="py-2 px-3 rounded btn">
            <a href="#">Let's Talk</a>
          </LetTalkStyle>
        </div>
      </Wrapper>
    </Wrapper>
  );
};

export default LetsTalk;
