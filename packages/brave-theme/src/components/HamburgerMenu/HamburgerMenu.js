import React from "react";
import HamburgerMenuLayout from "./HamburgerMenuLayout";

function HamburgerMenu(props) {
  const { toggleHamburgerMenu } = props;
  return <HamburgerMenuLayout onHamburgerMenuClose={toggleHamburgerMenu} />;
}

export default HamburgerMenu;
