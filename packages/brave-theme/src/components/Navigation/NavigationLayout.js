import { styled } from "frontity";
import React, { useState, useEffect } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import Brand from "./Brand";
import PrimaryNavLinks from "./PrimaryNavLinks";

const StyledDiv = styled.div`
  position: fixed;
  z-index: 400;
  width: 100%;
  color: white;
  background-color: ${(props) =>
    props.navbarBackground ? "rgba(0, 0, 0, 0.2)" : "transparent"};
  display: flex;
  justify-content: center;
  top: ${(props) => (props.navbarScroll ? "-10vh" : "0vh")};
  transition: top 300ms ease, background-color 200ms ease;

  :hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const StyledContainer = styled.div`
  width: 60vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;

  @media (max-width: 1024px) {
    width: 80vw;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

function NavigationLayout(props) {
  const { isHamburgerMenuOpen, toggleHamburgerMenu, navigationItems } = props;
  const [navbarScroll, setNavbarScroll] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);

  //  TODO move scroll logic into Navigation.js

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    function onScroll() {
      let currentScrollPos = window.scrollY;

      if (currentScrollPos > 100) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }

      if (currentScrollPos > 300) {
        setNavbarScroll(true);
      } else {
        setNavbarScroll(false);
      }

      if (currentScrollPos < prevScrollPos) {
        setNavbarScroll(false);
      }

      prevScrollPos = currentScrollPos;
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <StyledDiv
        navbarScroll={navbarScroll}
        navbarBackground={navbarBackground}
      >
        <StyledContainer>
          <Brand />
          <PrimaryNavLinks
            toggleHamburgerMenu={toggleHamburgerMenu}
            navigationItems={navigationItems}
          />
        </StyledContainer>
      </StyledDiv>
      {isHamburgerMenuOpen && (
        <HamburgerMenu toggleHamburgerMenu={toggleHamburgerMenu} />
      )}
    </>
  );
}

export default NavigationLayout;
