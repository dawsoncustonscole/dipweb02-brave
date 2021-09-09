import OurTools from "../components/OurTools/OurTools";

const ourTools = {
  name: "our-tools",
  priority: 10,
  test: ({ component, props }) =>
    component === "div" && props.className === "wp-block-columns our-tools",
  processor: ({ node }) => {
    const [heading, subHeading, content] = node.children[0].children;
    return {
      component: OurTools,
      props: { heading, subHeading, content },
    };
  },
};

export default ourTools;
