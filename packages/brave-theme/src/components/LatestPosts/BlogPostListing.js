import { styled } from "frontity";
import React from "react";
import { H6, P2 } from "../../Styles/Font";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 12rem;
  gap: 5vw;

  @media (max-width: 425px) {
    height: 120px;

    .excerpt {
      display: none;
    }
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
`;

const StyledImage = styled.div`
  max-width: 25vw;
  flex: 1;
  flex-shrink: 1;

  @media (max-width: 425px) {
    max-width: 120px;
  }
  @media (max-width: 375px) {
    max-width: 96px;
    max-height: 96px;
  }
`;

function BlogPostListing(props) {
  const { title, author, thumbnailSrc, publishDate, excerpt } = props;
  return (
    <StyledDiv className="blogPostListing">
      <StyledContent>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <div className="author">{author}</div>
          <H6 className="title">{title}</H6>
          <P2 className="excerpt">{excerpt}</P2>
        </div>

        <div className="publishDate">{publishDate}</div>
      </StyledContent>
      <StyledImage>
        <img
          src={thumbnailSrc}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "0.5rem",
          }}
        />
      </StyledImage>
    </StyledDiv>
  );
}

export default BlogPostListing;
