import React from "react";
import { NavLinkP } from "../../Styles/Font";
import { styled } from "frontity";
import HamburgerMenuIcon from "./HamburgerMenuIcon";

const StyledDiv = styled.div`
  display: flex;
  gap: 32px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

function PrimaryNavLinks(props) {
  const { toggleHamburgerMenu } = props;
  return (
    <>
      <StyledDiv>
        <NavLinkP>Tools</NavLinkP>
        <NavLinkP>About us</NavLinkP>
        <NavLinkP>Get Involved</NavLinkP>
        <NavLinkP>Resources</NavLinkP>
      </StyledDiv>
      <HamburgerMenuIcon onClick={toggleHamburgerMenu} />
    </>
  );
}

export default PrimaryNavLinks;
