import React from "react";
import { connect } from "frontity";
import NavigationLayout from "./NavigationLayout";

function Navigation(props) {
  const { state, actions } = props;
  const toggleHamburgerMenu = actions.theme.toggleHamburgerMenu;
  const isHamburgerMenuOpen = state.theme.isHamburgerMenuOpen;
  const navigationItems = state.theme.menu;

  return (
    <NavigationLayout
      toggleHamburgerMenu={toggleHamburgerMenu}
      isHamburgerMenuOpen={isHamburgerMenuOpen}
      navigationItems={navigationItems}
    />
  );
}

export default connect(Navigation);
