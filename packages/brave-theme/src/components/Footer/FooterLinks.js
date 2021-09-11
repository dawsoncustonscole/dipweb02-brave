import { styled } from "frontity";
import React from "react";
import { H6, NavLinkP } from "../../Styles/Font";
import Link from "@frontity/components/link";

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;
  }
  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
`;

function FooterLinks(props) {
  const { footerLinks } = props;

  function renderFooterLinks(item, index) {
    return (
      <div
        key={index}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <H6>{item.title}</H6>
        {item.menuItems.map((child, index) => {
          return (
            <Link
              key={index}
              style={{ textDecoration: "none", color: "black" }}
              link={child.href}
            >
              <NavLinkP>{child.name}</NavLinkP>
            </Link>
          );
        })}
      </div>
    );
  }

  return <StyledGrid>{footerLinks.map(renderFooterLinks)}</StyledGrid>;
}

export default FooterLinks;
