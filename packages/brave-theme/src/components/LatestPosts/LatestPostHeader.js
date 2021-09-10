import { styled } from "frontity";
import React from "react";
import { H3 } from "../../Styles/Font";
import PrimaryButton from "../Buttons/PrimaryButton";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;

  @media (max-width: 425px) {
    margin-bottom: 3.5rem;
  }
`;

const StyledButtonContainer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

function LatestPostHeader(props) {
  const { headingText, buttonText } = props;
  return (
    <StyledDiv>
      <H3>{headingText}</H3>
      <StyledButtonContainer className="hideOnMobile">
        <PrimaryButton title={buttonText} />
      </StyledButtonContainer>
    </StyledDiv>
  );
}

export default LatestPostHeader;
