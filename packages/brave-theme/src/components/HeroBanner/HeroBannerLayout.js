import React from "react";
import BackgroundImage from "./BackgroundImage";
import HeroBannerContent from "./HeroBannerContent";
import Overlay from "./Overlay";

function HeroBannerLayout(props) {
  const { backgroundImageSrc, content } = props;

  return (
    <>
      <Overlay />
      <BackgroundImage backgroundImageSrc={backgroundImageSrc} />

      <HeroBannerContent content={content} />
    </>
  );
}

export default HeroBannerLayout;
