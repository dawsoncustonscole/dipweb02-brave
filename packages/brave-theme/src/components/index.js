import React from "react";
import { connect } from "frontity";
import Switch from "@frontity/components/switch";
import HomeScreen from "../screens/HomeScreen";

function Root(props) {
  const { state, libraries } = props;

  const data = state.source.get(state.router.link);

  return (
    <>
      <main>
        <Switch>
          <HomeScreen when={data.isHome} />
        </Switch>
      </main>
    </>
  );
}

export default connect(Root);
