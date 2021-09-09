import React from "react";
import FeaturedImageLayout from "./FeaturedImageLayout";

function FeaturedImage(props) {
  const { content, imageSrc } = props;

  const parsedContent = [];
  content.map((item) => {
    parsedContent.push({
      component: item.component,
      content: item.children[0].content,
    });
  });

  return <FeaturedImageLayout content={parsedContent} imageSrc={imageSrc} />;
}

export default FeaturedImage;
