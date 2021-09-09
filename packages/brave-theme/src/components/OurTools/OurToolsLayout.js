import { styled } from "frontity";
import React from "react";
import { H2, H6, P } from "../../Styles/Font";

// TODO refactor, componentise

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledContainer = styled.div`
  margin: 8rem 0;
  width: 80vw;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

function OurToolsLayout(props) {
  const { content, heading, subHeading } = props;

  function renderContent(item) {
    return (
      <div>
        {item.map((item) => {
          switch (item.component) {
            case "figure":
              return (
                <figure
                  style={{
                    margin: 0,
                    marginBottom: "1.5rem",
                    borderRadius: 8,
                    overflow: "hidden",
                    height: "12.5rem",
                  }}
                >
                  <img
                    src={item.children[0].props.src}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "100%",
                    }}
                  />
                </figure>
              );
            case "h6":
              return <H6>{item.children[0].content}</H6>;
            case "p":
              return (
                <P style={{ marginTop: "0.5rem" }}>
                  {item.children[0].content}
                </P>
              );
          }
        })}
      </div>
    );
  }

  return (
    <StyledWrapper>
      <StyledContainer>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <H2>{heading}</H2>
          </div>
          <div style={{ flex: 1, margin: "-1rem" }}>
            <P>{subHeading}</P>
          </div>
        </div>

        <StyledGrid>{content.map(renderContent)}</StyledGrid>
      </StyledContainer>
    </StyledWrapper>
  );
}

export default OurToolsLayout;
