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

function NavigationLayout() {
  return (
    <StyledDiv>
      <div
        style={{
          width: "80vw",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "12.5vh",
        }}
      >
        <Brand />
        <PrimaryNavLinks />
      </div>
    </StyledDiv>
  );
}

export default NavigationLayout;
