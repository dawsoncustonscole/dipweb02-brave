import React from "react";
import { styled } from "frontity";

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function BackgroundImage(props) {
  const { backgroundImageSrc } = props;
  return (
    <StyledDiv className="hero-banner_background-image">
      <img src={backgroundImageSrc} />
    </StyledDiv>
  );
}

export default BackgroundImage;
