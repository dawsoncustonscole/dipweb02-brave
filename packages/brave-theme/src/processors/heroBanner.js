import HeroBanner from "../components/HeroBanner/HeroBanner";

const heroBanner = {
  name: "hero_banner",
  priority: 10,
  test: ({ component, props }) =>
    component === "div" && props.className === "wp-block-columns hero-banner",
  processor: ({ node }) => {
    const [backgroundImage, content] = node.children[0].children[0].children;
    const backgroundImageSrc = backgroundImage.props["data-large-file"];

    return {
      component: HeroBanner,
      props: {
        backgroundImageSrc,
        content,
      },
    };
  },
};

export default heroBanner;
