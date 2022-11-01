import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { StyledTypography } from "components/reusable";

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export const CustomSeparator = ({ activePageName }: any) => {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      fontSize={20}
      fontWeight={600}
      href="/"
      onClick={handleClick}
    >
      {activePageName}
    </Link>,
    <StyledTypography
      key="2"
      color="text.primary"
      fontSize={20}
      fontWeight={600}
    >
      Process 1
    </StyledTypography>,
  ];

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      {breadcrumbs}
    </Breadcrumbs>
  );
};
