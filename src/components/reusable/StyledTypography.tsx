import { Typography, styled } from "@mui/material";

export const StyledTypography = styled(Typography)(
  ({
    fontSize,
    fontWeight,
    lineHeight,
    color,
    textdecorationline = "none",
    width,
  }) => ({
    fontSize: fontSize,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
    color: color,
    textDecorationLine: textdecorationline,
    width: width,
  })
);
