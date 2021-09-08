import Root from "./components";
import heroBanner from "./processors/heroBanner";

const braveTheme = {
  name: "brave-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {},
  },
  actions: {
    theme: {},
  },
  libraries: {
    html2react: {
      processors: [heroBanner],
    },
  },
};

export default braveTheme;
