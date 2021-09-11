const settings = {
  name: "brave-technology-coop-frontity",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "brave-theme",
      state: {
        theme: {
          menu: [
            {
              ref: 1,
              name: "Tools",
              submenu: [
                { name: "The brave app", href: "/the-brave-app" },
                { name: "ODetect sensors", href: "/odetect-sensors" },
                { name: "Brave buttons", href: "/brave-buttons" },
              ],
            },
            {
              ref: 2,
              name: "About us",
              submenu: [
                { name: "Team", href: "/team" },
                { name: "Co-op life", href: "coop-life" },
                {
                  name: "Privacy",
                  href: "privacy",
                },
              ],
            },
            {
              ref: 3,
              name: "Get involved",
              submenu: [
                {
                  name: "Join Brave Co-op",
                  href: "join-brave-coop",
                },
                {
                  name: "Become a supporter",
                  href: "become-a-supporter",
                },
              ],
            },
            {
              ref: 4,
              name: "Resources",
              submenu: [
                {
                  name: "Harm reduction",
                  href: "harm-reduction",
                },
                {
                  name: "Awareness",
                  href: "awareness",
                },
                {
                  name: "Community",
                  href: "brave-app-community",
                },
                {
                  name: "Brave blog",
                  href: "brave-blog",
                },
              ],
            },
          ],
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://bravetechnologycoop.wordpress.com",
          homepage: "/home",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
