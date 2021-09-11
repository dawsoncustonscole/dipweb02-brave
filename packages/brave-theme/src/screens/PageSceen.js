import React from "react";
import { connect } from "frontity";

import Page from "../components/Page/Page";

function PageScreen(props) {
  const { state, libraries } = props;

  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  const pageTitle = page.title.rendered;

  const Html2React = libraries.html2react.Component;

  return data.isReady ? (
    <Page title={pageTitle}>
      <Html2React html={page.content.rendered} />
    </Page>
  ) : null;
}

export default connect(PageScreen);
