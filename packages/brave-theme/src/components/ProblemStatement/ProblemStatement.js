import React from "react";
import Layout from "./Layout";

function ProblemStatement(props) {
  const { headline, content } = props;

  const parsedHeadline = headline.children[0].children[0].content;
  const parsedContent = [];

  function getComponents(item) {
    switch (item.component) {
      case "h5":
        parsedContent.push({
          component: "h5",
          content: item.children[0].content,
        });
        break;
      case "p":
        parsedContent.push({
          component: "p",
          content: item.children[0].content,
        });
        break;
    }
    console.log(parsedContent);
  }

  return (
    <>
      {content.children.map(getComponents)}
      <Layout headline={parsedHeadline} content={parsedContent} />
    </>
  );
}

export default ProblemStatement;
