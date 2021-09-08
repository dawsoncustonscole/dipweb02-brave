import React from "react";
import { styled } from "frontity";

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  height: 100vh;
  z-index: 100;

  img {
    min-width: 100%;
    height: 100%;
    transform: scale(2);
    object-position: 200px -140px;
  }
`;

function BackgroundImage(props) {
  const { backgroundImageSrc } = props;
  return (
    <StyledDiv className="hero-banner_background-image">
      <img src={backgroundImageSrc} />;
    </StyledDiv>
  );
}

export default BackgroundImage;
