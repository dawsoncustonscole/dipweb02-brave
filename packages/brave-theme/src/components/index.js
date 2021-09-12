import React from "react";
import { connect, css, Global } from "frontity";
import Switch from "@frontity/components/switch";
import HomeScreen from "../screens/HomeScreen";
import PageScreen from "../screens/PageSceen";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";

function Root(props) {
  const { actions, state, libraries } = props;

  const data = state.source.get(state.router.link);
  const toggleHamburgerMenu = actions.theme.toggleHamburgerMenu;
  const isHamburgerMenuOpen = state.theme.isHamburgerMenuOpen;
  const navigationItems = state.theme.menu;

  return (
    <>
      <Global
        styles={css`
          html {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            font-size: 16px;
          }
          body {
            margin: 0;
          }

          p {
            font-size: 21px;
            line-height: 150%;
          }
        `}
      />
      <Navigation
        toggleHamburgerMenu={toggleHamburgerMenu}
        isHamburgerMenuOpen={isHamburgerMenuOpen}
        navigationItems={navigationItems}
      />
      <main>
        <Switch>
          <HomeScreen when={data.isHome} />
          <PageScreen when={data.isPage} />
        </Switch>
      </main>
      <Footer navigationItems={navigationItems} />
    </>
  );
}

export default connect(Root);
