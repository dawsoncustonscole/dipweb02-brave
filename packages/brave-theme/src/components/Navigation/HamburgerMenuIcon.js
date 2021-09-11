import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "frontity";
import React from "react";

// TODO put this into a container with large hit space

const StyledDiv = styled.div`
  align-items: center;
  display: none;
  width: 3rem;
  justify-content: center;
  height: 50%;
  border-radius: 0.5rem;
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

function HamburgerMenuIcon(props) {
  const { onClick } = props;
  return (
    <StyledDiv onClick={() => onClick()}>
      <FontAwesomeIcon icon={faBars} size="lg" />
    </StyledDiv>
  );
}

export default HamburgerMenuIcon;
