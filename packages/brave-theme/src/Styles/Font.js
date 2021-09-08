import { styled } from "frontity";

export const H1 = styled.h1`
  font-size: 4rem;
  margin: 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
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
