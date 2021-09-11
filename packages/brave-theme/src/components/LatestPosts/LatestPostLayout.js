import { styled } from "frontity";
import React from "react";
import BlogPostListing from "./BlogPostListing";
import LatestPostHeader from "./LatestPostHeader";
import LatestPostHeading from "./LatestPostHeader";

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

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 768px) {
    gap: 3rem;
  }
`;

function LatestPostLayout(props) {
  const { content, headingText, buttonText } = props;

  function renderContent(item) {
    return (
      <BlogPostListing
        title={item.title}
        author={item.author}
        thumbnailSrc={item.thumbnailSrc}
        publishDate={item.publishDate}
        excerpt={item.excerpt}
      />
    );
  }

  return (
    <StyledWrapper>
      <StyledContainer>
        <LatestPostHeader headingText={headingText} buttonText={buttonText} />
        <StyledDiv>{content.map(renderContent)}</StyledDiv>
      </StyledContainer>
    </StyledWrapper>
  );
}

export default LatestPostLayout;
