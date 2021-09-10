import React from "react";
import HeroBannerLayout from "./HeroBannerLayout";

// TODO set parseContent = function parseContent()

function HeroBanner(props) {
  const { backgroundImageSrc, content } = props;

  const parsedContent = [];

  function getButtonContent(item) {
    parsedContent.push({
      component: "button",
      content: item.children[0].children[0].children[0].content,
    });
  }

  function parseComponents(item) {
    parsedContent.push({
      component: item.component,
      content: item.children[0].content,
    });

    if (item.props.className === "wp-block-buttons") {
      getButtonContent(item);
    }
  }

  return (
    <>
      {content.children.map(parseComponents)}
      <HeroBannerLayout
        backgroundImageSrc={backgroundImageSrc}
        content={parsedContent}
      />
    </>
  );
}

export default HeroBanner;
