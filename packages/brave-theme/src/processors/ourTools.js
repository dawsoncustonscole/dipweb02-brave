import OurTools from "../components/OurTools/OurTools";

const ourTools = {
  name: "our-tools",
  priority: 10,
  test: ({ node }) => node.props.className.split(" ").includes("our-tools"),
  processor: ({ node }) => {
    const [heading, subHeading, content] = node.children[0].children;
    return {
      component: OurTools,
      props: { heading, subHeading, content },
    };
  },
};

export default ourTools;
