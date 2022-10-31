import { styled, IconButton } from "@mui/material";
import { IconButtonProps as MuiIconButtonProps } from "@mui/material/IconButton";
import { CSSObject } from "@mui/material/styles";

interface IconButtonProps extends MuiIconButtonProps {
  marginbottom?: number;
  width?: number;
  height?: number;
  display?: string;
}

export const IconButtonStyled = styled(IconButton)<IconButtonProps>(
  ({ marginbottom = 0, width = 20, height = 20, display }): CSSObject => ({
    padding: 0,
    margin: 0,
    marginBottom: marginbottom,
    width: width,
    height: height,
    display: display,
  })
);
