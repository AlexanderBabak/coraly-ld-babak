import { Box, styled } from "@mui/material";
import { BoxProps as MuiBoxProps } from "@mui/material/Box";
import { CSSObject } from "@mui/material/styles";

interface BoxProps extends MuiBoxProps {
  height?: number | string;
  width?: number | string;
  maxWidth?: number | string;
  padding?: string;
  bgcolor?: string;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  borderRadius?: number;
  color?: string;
  gap?: number;
  justifyContent?: string;
  alignItems?: string;
}

export const StyledBox = styled(Box)<BoxProps>(
  ({
    height,
    borderRadius,
    width,
    marginRight,
    marginTop,
    marginBottom,
    marginLeft,
    color,
    bgcolor,
    gap,
    padding,
    justifyContent = "center",
    alignItems = "center",
    maxWidth,
  }): CSSObject => ({
    height: height,
    width: width,
    padding: padding,
    bgcolor: bgcolor,
    marginRight: marginRight,
    marginTop: marginTop,
    marginLeft: marginLeft,
    marginBottom: marginBottom,
    borderRadius: borderRadius,
    color: color,
    display: "flex",
    justifyContent: justifyContent,
    alignItems: alignItems,
    boxSizing: "border-box",
    gap: gap,
    maxWidth: maxWidth,
  })
) as typeof Box;
