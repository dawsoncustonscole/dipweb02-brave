import React from "react";
import { styled } from "frontity";
import { FeaturedText, H1 } from "../../Styles/Font";
import PrimaryButton from "../Buttons/PrimaryButton";

const StyledDiv = styled.div`
  position: absolute;
  z-index: 300;
  bottom: 12.5vh;
  width: 50vw;
  left: 10vw;

  H1,
  p {
    color: white;
  }

  p {
    width: 33vw;
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
