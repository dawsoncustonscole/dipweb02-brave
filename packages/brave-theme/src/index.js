import Root from "./components";
import featuredImage from "./processors/featuredImage";
import heroBanner from "./processors/heroBanner";
import ourTools from "./processors/ourTools";
import problemStatement from "./processors/problemStatement";
import { latestPosts, latestPostsHeader } from "./processors/latestPosts";

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
      processors: [
        heroBanner,
        problemStatement,
        ourTools,
        featuredImage,
        latestPosts,
        latestPostsHeader,
      ],
    },
  },
};

export default braveTheme;
