import Root from "./components";
import heroBanner from "./processors/heroBanner";
import ourTools from "./processors/ourTools";
import problemStatement from "./processors/problemStatement";

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
      processors: [heroBanner, problemStatement, ourTools],
    },
  },
};

export default braveTheme;
