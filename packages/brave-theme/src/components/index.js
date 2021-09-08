import React from "react";
import { connect } from "frontity";

function Root(props) {
  const { state } = props;
  return (
    <>
      <h1>Hello Frontity</h1>
      <p>Current URL: {state.router.link}</p>
    </>
  );
}

export default connect(Root);
