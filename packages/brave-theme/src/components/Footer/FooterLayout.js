import { styled } from "frontity";
import React from "react";
import { heatherGrey } from "../../Styles/Colors";
import FooterCopyright from "./FooterCopyright";
import FooterLinks from "./FooterLinks";

const StyledWrapper = styled.div`
  background-color: ${heatherGrey};
  display: flex;
  justify-content: center;
`;
const StyledContainer = styled.div`
  width: 60vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8rem;
  padding-top: 4rem;
  padding-bottom: 1.5rem;

  @media (max-width: 1024px) {
    width: 80vw;
  }

  @media (max-width: 768px) {
    width: 90vw;
    padding-bottom: 4rem;
  }

  @media (max-width: 425px) {
    gap: 6rem;
  }
`;
function FooterLayout(props) {
  const { footerLinks } = props;
  return (
    <StyledWrapper>
      <StyledContainer>
        <FooterLinks footerLinks={footerLinks} />
        <FooterCopyright />
      </StyledContainer>
    </StyledWrapper>
  );
}

export default FooterLayout;
