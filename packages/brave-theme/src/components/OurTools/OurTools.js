import React from "react";
import OurToolsLayout from "./OurToolsLayout";

function OurTools(props) {
  const { heading, subHeading, content } = props;

  const parsedHeading = heading.children[0].content;
  const parsedSubHeading = subHeading.children[0].content;

  let parsedContent = [];
  content.children.map((item) => {
    parsedContent.push(item.children);
  });

  return (
    <OurToolsLayout
      heading={parsedHeading}
      subHeading={parsedSubHeading}
      content={parsedContent}
    ></OurToolsLayout>
  );
}

export default OurTools;
