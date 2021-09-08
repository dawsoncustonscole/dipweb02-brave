import React from "react";
import { styled } from "frontity";

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  opacity: 0.2;
  background-color: black;
  z-index: 200;
  height: 100vh;
`;

function Overlay() {
  return <StyledDiv />;
}

export default Overlay;
