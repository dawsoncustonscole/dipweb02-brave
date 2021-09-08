import React from "react";
import { styled } from "frontity";
import { FeaturedText, H1 } from "../../Styles/Font";
import PrimaryButton from "../Buttons/PrimaryButton";

const StyledDiv = styled.div`
  position: absolute;
  z-index: 300;
  bottom: 12.5vh;
  left: 10vw;

  H1 {
    color: white;
    width: 12ch;
  }
  p {
    color: white;
    width: 30ch;
  }

  @media (max-width: 768px) {
    left: 5vw;
  }

  @media (max-width: 425px) {
    bottom: 10vh;
    H1 {
      width: 10ch;
    }
    p {
      width: 20ch;
    }
  }

  @media (max-width: 320px) {
    bottom: 10vh;
    H1 {
      width: 8ch;
    }
    p {
      width: 20ch;
    }
  }
`;

function HeroBannerContent(props) {
  const { content } = props;

  function renderContent() {
    return content.map((item) => {
      switch (item.component) {
        case "h1":
          return <H1>{item.content}</H1>;
        case "p":
          return <FeaturedText>{item.content}</FeaturedText>;
        case "button":
          return <PrimaryButton title={item.content} />;
      }
    });
  }

  return (
    <StyledDiv className="hero-banner_content">{renderContent()}</StyledDiv>
  );
}

export default HeroBannerContent;
