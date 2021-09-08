import { styled } from "frontity";
import React from "react";
import BackgroundImage from "./BackgroundImage";
import HeroBannerContent from "./HeroBannerContent";
import Overlay from "./Overlay";

const StyledDiv = styled.div`
  display: flex;
  height: 100vh;
`;

function HeroBannerLayout(props) {
  const { backgroundImageSrc, content } = props;

  return (
    <StyledDiv class="hero-banner_layout">
      <Overlay />
      <BackgroundImage backgroundImageSrc={backgroundImageSrc} />
      <HeroBannerContent content={content} />
    </StyledDiv>
  );
}

export default HeroBannerLayout;
