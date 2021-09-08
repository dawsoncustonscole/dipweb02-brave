import { styled } from "frontity";

export const H1 = styled.h1`
  font-size: 64px;
  margin: 0;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 48px;
  }
`;

export const FeaturedText = styled.p`
  font-size: 24px;
  line-height: 150%;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 21px;
  }
`;

export const BrandH4 = styled.h4`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

export const NavLinkP = styled.p`
  font-size: 18px;
  margin: 0;
`;
