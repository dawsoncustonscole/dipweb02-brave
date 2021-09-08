import HeroBanner from "../components/HeroBanner/HeroBanner";

const heroBanner = {
  name: "hero_banner",
  priority: 10,
  test: ({ node }) => node.props.className.split(" ").includes("hero-banner"),
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
