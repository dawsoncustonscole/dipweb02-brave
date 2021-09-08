import React from "react";
import Layout from "./Layout";

function ProblemStatement(props) {
  const { headline, content } = props;

  const parsedHeadline = headline.children[0].children[0].content;
  const parsedContent = [];

  function parseComponents(item) {
    parsedContent.push({
      component: item.component,
      content: item.children[0].content,
    });
  }

  return (
    <>
      {content.children.map(parseComponents)}
      <Layout headline={parsedHeadline} content={parsedContent} />
    </>
  );
}

export default ProblemStatement;
