import React from "react";
import BackgroundImage from "./BackgroundImage";
import HeroBannerContent from "./HeroBannerContent";
import Overlay from "./Overlay";
import { styled } from "frontity";

const StyledDiv = styled.div`
  position: relative;
  display: flex;
  height: 100vh;

  @media (max-width: 375px) {
    height: 110vh;
  }
`;

function HeroBannerLayout(props) {
  const { backgroundImageSrc, content } = props;

  return (
    <StyledDiv className="hero-banner_layout">
      <Overlay />
      <BackgroundImage backgroundImageSrc={backgroundImageSrc} />
      <HeroBannerContent content={content} />
    </StyledDiv>
  );
}

export default HeroBannerLayout;
