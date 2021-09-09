const featuredImage = {
  name: "featured-image",
  priority: 10,
  test: ({ component, props }) =>
    component === "div" &&
    props.className === "wp-block-columns featured-image",
  processor: ({ node }) => {
    console.log(node);
  },
};

export default featuredImage;
