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
                { name: "The brave app", href: "/tools/the-brave-app" },
                { name: "ODetect sensors", href: "/tools/odetect-sensors" },
                { name: "Brave buttons", href: "/tools/brave-buttons" },
              ],
            },
            {
              ref: 2,
              name: "About us",
              submenu: [
                { name: "Team", href: "/about-us/team" },
                { name: "Co-op life", href: "/about-us/coop-life" },
                {
                  name: "Privacy",
                  href: "/about-us/privacy&anonymity",
                },
              ],
            },
            {
              ref: 3,
              name: "Get involved",
              submenu: [
                {
                  name: "Join Brave Co-op",
                  href: "/get-involved/join-brave-coop",
                },
                {
                  name: "Become a supporter",
                  href: "/about-us/become-a-supporter",
                },
              ],
            },
            {
              ref: 4,
              name: "Resources",
              submenu: [
                {
                  name: "Harm reduction",
                  href: "/resources/harm-reduction",
                },
                {
                  name: "Awareness",
                  href: "/resources/awareness",
                },
                {
                  name: "Community",
                  href: "/resources/brave-app-community",
                },
                {
                  name: "Brave blog",
                  href: "/resources/brave-blog",
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
