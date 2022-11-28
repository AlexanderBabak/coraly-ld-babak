import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { StyledTypography } from "components/reusable";

export const CustomSeparator = ({ activePageName }: any) => {
  const breadcrumbs = [
    <StyledTypography
      key="2"
      color="text.primary"
      fontSize={20}
      fontWeight={600}
    >
      {activePageName}
    </StyledTypography>,
  ];

  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb">
      {breadcrumbs}
    </Breadcrumbs>
  );
};
