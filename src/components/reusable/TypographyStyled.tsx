import { Typography, styled } from "@mui/material";
import { TypographyProps as MuiTypographyProps } from "@mui/material/Typography";
import { CSSObject } from "@mui/material/styles";

interface TypographyProps extends MuiTypographyProps {
  fontfamily?: string;
  fontSize?: number;
  fontWeight?: any;
  lineHeight?: string;
  color?: string;
  textdecorationline?: string;
  width?: number | string;
}

export const StyledTypography = styled(Typography)<TypographyProps>(
  ({
    fontSize,
    fontWeight,
    lineHeight,
    color,
    textdecorationline = "none",
    width,
  }): CSSObject => ({
    fontSize: fontSize,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
    color: color,
    textDecorationLine: textdecorationline,
    width: width,
  })
);
