import React from "react";
import { styled } from "frontity";
import { heatherGrey } from "../../Styles/Colors";
import { H3, P } from "../../Styles/Font";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${heatherGrey};
`;

const StyledContainer = styled.div`
  margin: 8rem 0;
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    width: 90vw;
  }

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column-reverse;
    margin: 4rem 0;
  }
`;

function FeaturedImageLayout(props) {
  const { content, imageSrc } = props;

  function renderContent(item, index) {
    switch (item.component) {
      case "h3":
        return <H3>{item.content}</H3>;
      default:
        return <P>{item.content}</P>;
    }
  }

  return (
    <StyledWrapper>
      <StyledContainer>
        <div>
          <div
            style={{
              height: "0.5rem",
              width: "50%",
              backgroundColor: "#F8CE80",
              marginBottom: "2rem",
            }}
          ></div>
          {content.map(renderContent)}
        </div>
        <div>
          <figure
            style={{
              margin: 0,
              borderRadius: "0.5rem",
              overflow: "hidden",
              height: "100%",
              maxHeight: "60vh",
            }}
          >
            <img
              src={imageSrc}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </figure>
        </div>
      </StyledContainer>
    </StyledWrapper>
  );
}

export default FeaturedImageLayout;
