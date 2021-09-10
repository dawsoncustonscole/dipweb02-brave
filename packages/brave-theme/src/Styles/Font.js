import { styled } from "frontity";

export const H1 = styled.h1`
  font-size: 4rem;
  margin: 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
  @media (max-width: 320px) {
    font-size: 2.5rem;
  }
`;

export const H2 = styled.h2`
  font-size: 3rem;
  margin: 0;

  @media (max-width: 425px) {
    font-size: 2.5rem;
  }
`;

export const H3 = styled.h3`
  font-size: 2.5rem;
  margin: 0;
  font-weight: 600;
  line-height: 150%;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const H4 = styled.h4`
  font-size: 2rem;
  margin: 0;
  font-weight: 600;
  line-height: 150%;
`;

export const H5 = styled.h5`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
`;

export const H6 = styled.h6`
  font-size: 1.313rem;
  font-weight: 600;
  margin: 0;
`;

export const FeaturedText = styled.p`
  font-size: 1.5rem;
  line-height: 150%;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.313rem;
  }
`;

export const BrandH4 = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

export const NavLinkP = styled.p`
  font-size: 1.125rem;
  margin: 0;
`;

export const P = styled.p`
  font-size: 1.313rem;
  margin: 1.5rem 0;
  line-height: 150%;

  @media (max-width: 425px) {
    font-size: 1.125rem;
  }
`;

export const P2 = styled(NavLinkP)`
  line-height: 125%;
`;
