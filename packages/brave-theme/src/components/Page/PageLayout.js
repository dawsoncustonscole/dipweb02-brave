import { styled } from "frontity";
import React from "react";
import { H2 } from "../../Styles/Font";
import PageBody from "./PageBody";
import PageHeader from "./PageHeader";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledContainer = styled.div`
  padding: 8rem 0;
  width: 60vw;

  @media (max-width: 1024px) {
    width: 80vw;
  }

  @media (max-width: 768px) {
    padding-top: 5rem;
    padding-bottom: 3rem;
    width: 90vw;
  }
`;

function PageLayout(props) {
  const { title, children } = props;

  return (
    <>
      <PageHeader title={title} />
      <PageBody>{children}</PageBody>
    </>
  );
}

export default PageLayout;
