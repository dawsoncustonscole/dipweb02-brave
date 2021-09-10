import LatestPostHeading from "../components/LatestPosts/LatestPostHeader";
import LatestPosts from "../components/LatestPosts/LatestPosts";

// TODO create individual components & processors to fetch each element

const latestPostsHeader = {
  name: "latest-posts-header",
  priority: 10,
  test: ({ component, props }) =>
    component === "div" &&
    props.className.split(" ").includes("latest-posts-header"),
  processor: ({ node }) => {
    const [heading, button] = node.children[0].children[0].children;
    const headingText = heading.children[0].children[0].content;
    const buttonText =
      button.children[0].children[0].children[0].children[0].content;

    return {
      component: LatestPostHeading,
      props: {
        headingText,
        buttonText,
      },
    };
  },
};

const latestPosts = {
  name: "latest-posts",
  priority: 10,
  test: ({ component, props }) =>
    component === "div" && props.className === "wp-block-columns latest-posts",
  processor: ({ node }) => {
    const [heading, button] =
      node.children[0].children[0].children[0].children[0].children;

    const headingText = heading.children[0].children[0].content;
    const buttonText =
      button.children[0].children[0].children[0].children[0].content;

    const content = node.children[0].children[1].children.map((item) => {
      return item.children;
    });

    return {
      component: LatestPosts,
      props: { content, headingText, buttonText },
    };
  },
};

export { latestPostsHeader, latestPosts };
