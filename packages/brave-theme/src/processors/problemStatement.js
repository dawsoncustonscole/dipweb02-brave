import ProblemStatement from "../components/ProblemStatement/ProblemStatement";

const problemStatement = {
  name: "problem-statement",
  priority: 10,
  test: ({ component, props }) =>
    component === "div" &&
    props.className === "wp-block-columns problem-statement",
  processor: ({ node }) => {
    const [headline, content] = node.children;

    return {
      component: ProblemStatement,
      props: {
        headline,
        content,
      },
    };
  },
};

export default problemStatement;
