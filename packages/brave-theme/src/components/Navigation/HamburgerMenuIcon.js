import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "frontity";
import React from "react";

// TODO put this into a container with large hit space

const StyledDiv = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }

  @media (max-width: 425px) {
    margin-right: 8px;
  }
`;

function HamburgerMenuIcon() {
  return (
    <StyledDiv>
      <FontAwesomeIcon icon={faBars} size="lg" />
    </StyledDiv>
  );
}

export default HamburgerMenuIcon;
