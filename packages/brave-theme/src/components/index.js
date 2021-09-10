import React from "react";
import { connect, css, Global } from "frontity";
import Switch from "@frontity/components/switch";
import HomeScreen from "../screens/HomeScreen";
import Navigation from "./Navigation/Navigation";

function Root(props) {
  const { state, libraries } = props;

  const data = state.source.get(state.router.link);

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
        `}
      />
      <Navigation />
      <main>
        <Switch>
          <HomeScreen when={data.isHome} />
        </Switch>
      </main>
    </>
  );
}

export default connect(Root);
