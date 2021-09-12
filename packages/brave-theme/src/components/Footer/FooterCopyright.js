import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "frontity";
import React from "react";
import { H4 } from "../../Styles/Font";
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

function FooterCopyright() {
  return (
    <StyledDiv>
      <H4 style={{ lineHeight: "100%" }}>Brave</H4>
      <div style={{ flexGrow: 1, textAlign: "center" }}>
        <p style={{ fontSize: "1rem", margin: 0, lineHeight: "150%" }}>
          <strong>© 2021 Brave Technology Coop</strong> - All Rights Reserved
        </p>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <FontAwesomeIcon icon={faInstagram} size="lg" />
        <FontAwesomeIcon icon={faFacebook} size="lg" />
        <FontAwesomeIcon icon={faLinkedin} size="lg" />
      </div>
    </StyledDiv>
  );
}

export default FooterCopyright;
