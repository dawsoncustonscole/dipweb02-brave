import React from "react";
import { connect } from "frontity";

function HomeScreen(props) {
  const { state, libraries } = props;

  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  return (
    <>
      <Html2React html={page.content.rendered} />
    </>
  );
}

export default connect(HomeScreen);
