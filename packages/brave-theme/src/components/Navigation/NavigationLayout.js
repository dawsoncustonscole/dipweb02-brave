import { styled } from "frontity";
import React from "react";
import Brand from "./Brand";
import PrimaryNavLinks from "./PrimaryNavLinks";

const StyledDiv = styled.div`
  position: fixed;
  z-index: 400;
  width: 100%;
  color: white;
  background-color: rgba(54, 54, 54, 0.5);
  display: flex;
  justify-content: center;
`;

const StyledContainer = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 12.5vh;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

function NavigationLayout() {
  return (
    <StyledDiv>
      <StyledContainer>
        <Brand />
        <PrimaryNavLinks />
      </StyledContainer>
    </StyledDiv>
  );
}

export default NavigationLayout;
