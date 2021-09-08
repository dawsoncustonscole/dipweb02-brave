import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "frontity";
import React from "react";

const StyledDiv = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

function HamburgerMenuIcon() {
  return (
    <StyledDiv>
      <FontAwesomeIcon icon={faBars} size="l" />
    </StyledDiv>
  );
}

export default HamburgerMenuIcon;
