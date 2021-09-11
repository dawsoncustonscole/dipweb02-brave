import { styled } from "frontity";
import React from "react";
import { H2, H6, P } from "../../Styles/Font";

// TODO refactor, componentise

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledContainer = styled.div`
  padding: 8rem 0;
  width: 60vw;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 1024px) {
    width: 80vw;
  }

  @media (max-width: 768px) {
    padding-top: 5rem;
    padding-bottom: 3rem;
    width: 90vw;
    gap: 2rem;
  }
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
  }
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
        <StyledDiv>
          <H2>{heading}</H2>

          <P style={{ marginTop: "0.5rem" }}>{subHeading}</P>
        </StyledDiv>

        <StyledGrid>{content.map(renderContent)}</StyledGrid>
      </StyledContainer>
    </StyledWrapper>
  );
}

export default OurToolsLayout;
