import React from "react";
import { styled } from "frontity";

const StyledDiv = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: black;
  opacity: 0.3;
  z-index: 200;
`;

function Overlay() {
  return <StyledDiv></StyledDiv>;
}

export default Overlay;
