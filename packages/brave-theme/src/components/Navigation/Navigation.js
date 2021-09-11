import React from "react";
import NavigationLayout from "./NavigationLayout";

function Navigation(props) {
  const { toggleHamburgerMenu, isHamburgerMenuOpen, navigationItems } = props;

  return (
    <NavigationLayout
      toggleHamburgerMenu={toggleHamburgerMenu}
      isHamburgerMenuOpen={isHamburgerMenuOpen}
      navigationItems={navigationItems}
    />
  );
}

export default Navigation;
