import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "frontity";
import React from "react";
import { BrandH4, H6, NavLinkP } from "../../Styles/Font";

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch; // mobile safari
  z-index: 400;
  background-color: white;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

function HamburgerMenuLayout(props) {
  const { onHamburgerMenuClose } = props;
  return (
    <StyledWrapper>
      <StyledContainer>
        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 5vw",
            height: "10vh",
            alignItems: "center",
          }}
        >
          <BrandH4>brave</BrandH4>
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "3rem",
              alignItems: "center",
              justifyContent: "center",
            }}
            onClick={() => onHamburgerMenuClose()}
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </div>
        </div>
        <div className="menu-body" style={{ padding: "1rem 5vw" }}>
          <div className="menusection">
            <H6>Tools</H6>
            <div
              className="nav-items"
              style={{
                marginTop: "1rem",
                marginBottom: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <NavLinkP>The brave app</NavLinkP>
              <NavLinkP>ODetect sensors</NavLinkP>
              <NavLinkP>Brave buttons</NavLinkP>
            </div>
          </div>
          <div className="menusection">
            <H6>About us</H6>
            <div
              className="nav-items"
              style={{
                marginTop: "1rem",
                marginBottom: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <NavLinkP>The brave app</NavLinkP>
              <NavLinkP>ODetect sensors</NavLinkP>
              <NavLinkP>Brave buttons</NavLinkP>
            </div>
          </div>
          <div className="menusection">
            <H6>Resources</H6>
            <div
              className="nav-items"
              style={{
                marginTop: "1rem",
                marginBottom: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <NavLinkP>The brave app</NavLinkP>
              <NavLinkP>ODetect sensors</NavLinkP>
              <NavLinkP>Brave buttons</NavLinkP>
            </div>
          </div>
          <div className="menusection">
            <H6>Resources</H6>
            <div
              className="nav-items"
              style={{
                marginTop: "1rem",
                marginBottom: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <NavLinkP>The brave app</NavLinkP>
              <NavLinkP>ODetect sensors</NavLinkP>
              <NavLinkP>Brave buttons</NavLinkP>
            </div>
          </div>
        </div>
      </StyledContainer>
    </StyledWrapper>
  );
}

export default HamburgerMenuLayout;
