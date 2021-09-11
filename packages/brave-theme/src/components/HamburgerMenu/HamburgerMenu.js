import React from "react";
import HamburgerMenuLayout from "./HamburgerMenuLayout";

function HamburgerMenu(props) {
  const { navigationItems, toggleHamburgerMenu } = props;
  return (
    <HamburgerMenuLayout
      navigationItems={navigationItems}
      onHamburgerMenuClose={toggleHamburgerMenu}
    />
  );
}

export default HamburgerMenu;
