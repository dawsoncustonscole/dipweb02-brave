import React from "react";
import ProblemStatementLayout from "./ProblemStatementLayout";

function ProblemStatement(props) {
  const { headline, content } = props;

  const parsedHeadline = headline.children[0].children[0].content;
  const parsedContent = [];

  function parseComponents(item, index) {
    parsedContent.push({
      component: item.component,
      content: item.children[0].content,
      key: index,
    });
  }

  content.children.map(parseComponents);

  return (
    <ProblemStatementLayout headline={parsedHeadline} content={parsedContent} />
  );
}

export default ProblemStatement;
