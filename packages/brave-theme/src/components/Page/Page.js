import React from "react";
import PageLayout from "./PageLayout";

function Page(props) {
  const { title, children } = props;
  return <PageLayout title={title}>{children}</PageLayout>;
}

export default Page;
