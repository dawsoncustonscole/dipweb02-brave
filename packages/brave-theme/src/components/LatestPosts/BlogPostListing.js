import { styled } from "frontity";
import React from "react";
import { H6, P2 } from "../../Styles/Font";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 200px;

  @media (max-width: 768px) {
    height: 120px;

    .excerpt {
      display: none;
    }
  }
`;

const StyledContent = styled.div`
  padding-right: 4rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 425px) {
    padding-right: 2rem;
  }
`;

function BlogPostListing(props) {
  const { title, author, thumbnailSrc, publishDate, excerpt } = props;
  console.log(title);
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
      <img
        src={thumbnailSrc}
        style={{
          minWidth: "33vw",
          maxWidth: "336px",
          height: "100%",
          objectFit: "cover",
          borderRadius: "0.5rem",
        }}
      />
    </StyledDiv>
  );
}

export default BlogPostListing;
