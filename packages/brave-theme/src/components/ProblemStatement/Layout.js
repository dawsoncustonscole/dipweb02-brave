import { styled } from "frontity";
import React from "react";
import { H3, H5, P } from "../../Styles/Font";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.5rem;

  H3 {
    max-width: 20ch;
  }

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
`;

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f7f7f7;
`;

const StyledContainer = styled.div`
  width: 80vw;
  padding: 8rem 0;

  @media (max-width: 768px) {
    width: 90vw;
    padding: 5rem 0;
  }
`;

function renderContent(item) {
  switch (item.component) {
    case "h5":
      return <H5>{item.content}</H5>;
    case "p":
      return <P>{item.content}</P>;
    default:
      <P>{item.content}</P>;
  }
}

function Layout(props) {
  const { headline, content } = props;
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledDiv>
          <div>
            <div
              style={{
                height: "0.5rem",
                width: "50%",
                backgroundColor: "#C3C3D9",
                marginBottom: "2rem",
              }}
            ></div>
            <H3>{headline}</H3>
          </div>

          <div>{content.map(renderContent)}</div>
        </StyledDiv>
      </StyledContainer>
    </StyledWrapper>
  );
}

export default Layout;
