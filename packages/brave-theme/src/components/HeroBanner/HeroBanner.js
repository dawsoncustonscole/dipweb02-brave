import React from "react";
import HeroBannerLayout from "./HeroBannerLayout";

function HeroBanner(props) {
  const { backgroundImageSrc, content } = props;

  const parsedContent = [];

  function getButtonContent(item) {
    parsedContent.push({
      component: "button",
      content: item.children[0].children[0].children[0].content,
    });
  }

  function getComponents() {
    content.children.map((item) => {
      if (item.component === "h1") {
        parsedContent.push({
          component: "h1",
          content: item.children[0].content,
        });
      }
      if (item.component === "p") {
        parsedContent.push({
          component: "p",
          content: item.children[0].content,
        });
      }
      if (item.props.className === "wp-block-buttons") {
        getButtonContent(item);
      }
    });
  }

  return (
    <>
      {getComponents()}
      <HeroBannerLayout
        backgroundImageSrc={backgroundImageSrc}
        content={parsedContent}
      />
    </>
  );
}

export default HeroBanner;
