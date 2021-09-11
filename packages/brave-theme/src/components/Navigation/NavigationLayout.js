import { styled } from "frontity";
import React, { useState, useEffect } from "react";
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

function NavigationLayout() {
  const [navbarScroll, setNavbarScroll] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollNavBar);

    return () => window.removeEventListener("scroll", scrollNavBar);
  }, []);

  let prevScrollPos = window.scrollY;

  function scrollNavBar() {
    let currentScrollPos = window.scrollY;

    if (currentScrollPos > 100) {
      setNavbarBackground(true);
    } else if (currentScrollPos < 100) {
      setNavbarBackground(false);
    }

    if (currentScrollPos > prevScrollPos && currentScrollPos > 400) {
      setNavbarScroll(true);
    } else if (currentScrollPos < prevScrollPos) {
      setNavbarScroll(false);
    }

    // currentScrollPos > prevScrollPos
    //   ? setNavbarScroll(true)
    //   : setNavbarScroll(false);

    prevScrollPos = currentScrollPos;
  }

  return (
    <StyledDiv navbarScroll={navbarScroll} navbarBackground={navbarBackground}>
      <StyledContainer>
        <Brand />
        <PrimaryNavLinks />
      </StyledContainer>
    </StyledDiv>
  );
}

export default NavigationLayout;
