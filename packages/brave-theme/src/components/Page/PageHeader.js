import { styled } from "frontity";
import React from "react";
import { heatherGrey } from "../../Styles/Colors";
import { H2 } from "../../Styles/Font";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: darkblue;

  color: white;
`;

const StyledContainer = styled.div`
  padding-top: 15rem;
  padding-bottom: 3rem;
  width: 60vw;

  @media (max-width: 1024px) {
    width: 80vw;
  }

  @media (max-width: 768px) {
    padding-top: 10rem;
    padding-bottom: 2rem;
    width: 90vw;
  }
`;

function PageHeader(props) {
  const { title } = props;
  return (
    <StyledWrapper>
      <StyledContainer>
        <H2>{title}</H2>
      </StyledContainer>
    </StyledWrapper>
  );
}

export default PageHeader;
