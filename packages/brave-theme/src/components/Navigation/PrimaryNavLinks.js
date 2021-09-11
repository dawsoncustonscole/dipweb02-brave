import React from "react";
import { NavLinkP, P } from "../../Styles/Font";
import { styled } from "frontity";
import HamburgerMenuIcon from "./HamburgerMenuIcon";
import Link from "@frontity/components/Link";

const StyledDiv = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StyledNavItem = styled.div`
  padding: 2rem 1.5rem;
  text-align: center;

  :hover {
    text-decoration: underline;
  }
`;

const StyledSubMenu = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: black;
  display: none;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  transform: translateX(-25%);
  top: 8.15vh;
  width: 240px;
  text-align: left;
  padding: 2rem 0;
  ${StyledNavItem}:hover & {
    display: flex;
  }
`;

const HoverTriangle = styled.div`
  position: absolute;
  width: 0;
  height: 0;
  top: 7.5vh;
  color: white;
  z-index: 500;
  border-bottom: 6px solid #fff;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  visibility: hidden;

  ${StyledNavItem}:hover & {
    visibility: visible;
  }
`;

function PrimaryNavLinks(props) {
  const { toggleHamburgerMenu, navigationItems } = props;

  function renderNavItems(item, index) {
    return (
      <StyledNavItem>
        <NavLinkP>{item.name}</NavLinkP>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <HoverTriangle />
        </div>
        <StyledSubMenu>
          {item.submenu.map((child) => {
            return (
              <div style={{ paddingLeft: "2rem" }}>
                <Link
                  style={{ color: "black", textDecoration: "none" }}
                  link={child.href}
                >
                  <NavLinkP>{child.name}</NavLinkP>
                </Link>
              </div>
            );
          })}
        </StyledSubMenu>
      </StyledNavItem>
    );
  }

  return (
    <>
      <StyledDiv>{navigationItems.map(renderNavItems)}</StyledDiv>
      <HamburgerMenuIcon onClick={toggleHamburgerMenu} />
    </>
  );
}

export default PrimaryNavLinks;
