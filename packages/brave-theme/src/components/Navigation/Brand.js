import React from "react";
import { BrandH4 } from "../../Styles/Font";
import Link from "@frontity/components/link";

function Brand() {
  return (
    <Link style={{ textDecoration: "none", color: "white" }} link="/">
      <BrandH4>brave</BrandH4>
    </Link>
  );
}

export default Brand;
