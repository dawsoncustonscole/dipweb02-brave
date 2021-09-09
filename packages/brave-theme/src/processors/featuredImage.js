import FeaturedImage from "../components/FeaturedImage/FeaturedImage";

const featuredImage = {
  name: "featured-image",
  priority: 10,
  test: ({ component, props }) =>
    component === "div" &&
    props.className === "wp-block-columns featured-image",
  processor: ({ node }) => {
    const content = node.children[0].children;
    const imageSrc = node.children[1].children[0].children[0].props.src;

    return {
      component: FeaturedImage,
      props: {
        imageSrc,
        content,
      },
    };
  },
};

export default featuredImage;
