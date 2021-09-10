import React from "react";
import LatestPostLayout from "./LatestPostLayout";

function LatestPosts(props) {
  const { content, headingText, buttonText } = props;

  function getChildren(item) {
    return item;
  }

  function createPropsList(item) {
    let obj = {};
    item.map((item) => {
      switch (item.props.className) {
        case undefined:
          return (obj.title = item.children[0].content);
        case "wp-block-latest-posts__featured-image alignright":
          return (obj.thumbnailSrc = item.children[0].props["data-large-file"]);
        case "wp-block-latest-posts__post-author":
          return (obj.author = item.children[0].content);
        case "wp-block-latest-posts__post-date":
          return (obj.publishDate = item.children[0].content);
        case "wp-block-latest-posts__post-excerpt":
          return (obj.excerpt = item.children[0].content);
        default:
          return console.log("no match");
      }
    });

    return obj;
  }

  const parsedContent = content.map(getChildren).map(createPropsList);

  return (
    <LatestPostLayout
      content={parsedContent}
      headingText={headingText}
      buttonText={buttonText}
    />
  );
}

export default LatestPosts;
