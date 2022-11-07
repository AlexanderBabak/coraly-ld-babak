import React from "react";
import { StyledTypography } from "components/reusable";
import { useTheme } from "@mui/material";

export const DefaultContent = () => {
  const { typography } = useTheme();
  return (
    <>
      <StyledTypography
        fontSize={18}
        fontWeight={typography.fontWeightBold}
        lineHeight="27px"
        marginBottom={4}
      >
        Attention!!!!
      </StyledTypography>

      <StyledTypography
        fontSize={18}
        fontWeight={typography.fontWeightBold}
        lineHeight="27px"
        marginBottom={4}
      >
        This could be your ad
      </StyledTypography>
    </>
  );
};
