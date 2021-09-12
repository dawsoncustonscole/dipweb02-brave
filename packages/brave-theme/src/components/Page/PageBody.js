import { styled } from "frontity";
import React from "react";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledContainer = styled.div`
  padding: 3rem 0;
  width: 60vw;

  @media (max-width: 1024px) {
    width: 80vw;
  }

  @media (max-width: 768px) {
    padding-top: 3rem;
    padding-bottom: 3rem;
    width: 90vw;
  }
`;

function PageBody(props) {
  const { children } = props;
  return (
    <StyledWrapper>
      <StyledContainer>{children}</StyledContainer>
    </StyledWrapper>
  );
}

export default PageBody;
