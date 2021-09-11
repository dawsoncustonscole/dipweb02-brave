import React from "react";
import FooterLayout from "./FooterLayout";

const footerLinks = [
  {
    ref: 1,
    title: "Tools",
    menuItems: [
      {
        name: "The brave app",
        href: "/",
      },
      {
        name: "ODetect sensors",
        href: "/",
      },
      {
        name: "Brave buttons",
        href: "/",
      },
    ],
  },
  {
    ref: 2,
    title: "Resources",
    menuItems: [
      {
        name: "The brave app",
        href: "/",
      },
      {
        name: "ODetect sensors",
        href: "/",
      },
      {
        name: "Brave buttons",
        href: "/",
      },
    ],
  },
  {
    ref: 3,
    title: "About us",
    menuItems: [
      {
        name: "The brave app",
        href: "/",
      },
      {
        name: "ODetect sensors",
        href: "/",
      },
      {
        name: "Brave buttons",
        href: "/",
      },
    ],
  },
  {
    ref: 3,
    title: "Get involved",
    menuItems: [
      {
        name: "The brave app",
        href: "/",
      },
      {
        name: "ODetect sensors",
        href: "/",
      },
      {
        name: "Brave buttons",
        href: "/",
      },
    ],
  },
];

function Footer(props) {
  const { navigationItems } = props;
  return <FooterLayout navigationItems={navigationItems} />;
}

export default Footer;
