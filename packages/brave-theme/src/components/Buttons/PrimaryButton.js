import React from "react";
import Link from "@frontity/components/link";
import { styled } from "frontity";
import { primaryYellow } from "../../Styles/Colors";

const StyledButton = styled.button`
  border: none;
  padding: 16px;
  background-color: ${primaryYellow};
  font-size: 18px;
  border-radius: 8px;
`;

function PrimaryButton(props) {
  const { title, onClick = "/" } = props;
  return (
    <Link link={onClick}>
      <StyledButton>{title}</StyledButton>
    </Link>
  );
}

export default PrimaryButton;
