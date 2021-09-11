import React from "react";
import { connect } from "frontity";
import NavigationLayout from "./NavigationLayout";

// TODO Implement nav hide on scroll

function Navigation(props) {
  const { state, actions } = props;
  const toggleHamburgerMenu = actions.theme.toggleHamburgerMenu;
  const isHamburgerMenuOpen = state.theme.isHamburgerMenuOpen;

  return (
    <NavigationLayout
      toggleHamburgerMenu={toggleHamburgerMenu}
      isHamburgerMenuOpen={isHamburgerMenuOpen}
    />
  );
}

export default connect(Navigation);
