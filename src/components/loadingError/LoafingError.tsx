import React from "react";
import { useTheme } from "@mui/material/styles";
import { StyledBox, StyledTypography } from "components/reusable";

type Props = {
  error: string;
};

export const LoadingError: React.FC<Props> = ({ error }) => {
  const { palette } = useTheme();

  return (
    <StyledBox
      bgcolor={palette.error.main}
      margin={"auto"}
      padding={8}
      borderRadius={10}
    >
      <StyledTypography fontSize={24} color={palette.common.white}>
        {error}
      </StyledTypography>
    </StyledBox>
  );
};
