import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "frontity";
import React from "react";
import { BrandH4, H7, NavLinkP } from "../../Styles/Font";
import Link from "@frontity/components/link";

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
  const { navigationItems, onHamburgerMenuClose } = props;

  function renderMenuSection(item, index) {
    return (
      <div
        key={index}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <H7>{item.name}</H7>
        {item.submenu.map((child, index) => {
          return (
            <Link
              key={index}
              style={{ textDecoration: "none", color: "black" }}
              link={child.href}
              onClick={() => onHamburgerMenuClose()}
            >
              <NavLinkP>{child.name}</NavLinkP>
            </Link>
          );
        })}
      </div>
    );
  }

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

        <div
          className="menu-body"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            paddingTop: "1.5rem",
            paddingRight: "5vw",
            paddingBottom: "4rem",
            paddingLeft: "5vw",
          }}
        >
          {navigationItems.map(renderMenuSection)}
        </div>
      </StyledContainer>
    </StyledWrapper>
  );
}

export default HamburgerMenuLayout;
