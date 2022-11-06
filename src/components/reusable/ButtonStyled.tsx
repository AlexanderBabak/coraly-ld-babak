import React from "react";
import { styled, Button } from "@mui/material";
import { CSSObject } from "@mui/material/styles";

const ButtonStyle = styled(Button)(({ theme }): CSSObject => {
  return {
    textTransform: "none",
    borderRadius: "8px",
    fontSize: theme.typography.fontSize,
    fontWeight: theme.typography.fontWeightBold,
    height: 40,
    lineHeight: "18px",
    padding: "0px 12px",
  };
});

type Props = {
  text: string;
  color?:
    | "inherit"
    | "info"
    | "error"
    | "success"
    | "primary"
    | "secondary"
    | "warning"
    | undefined;
  variant?: "text" | "outlined" | "contained" | undefined;
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  onClick?: () => void;
  marginleft?: string;
  disableElevation?: boolean;
};

export const StyledButton: React.FC<Props> = ({
  text,
  color = "info",
  variant = "contained",
  type = "submit",
  fullWidth = true,
  onClick,
  marginleft,
  disableElevation = false,
  ...restProps
}) => {
  return (
    <ButtonStyle
      type={type}
      fullWidth={fullWidth}
      color={color}
      variant={variant}
      onClick={onClick}
      disableElevation={disableElevation}
      sx={{ marginLeft: marginleft }}
      {...restProps}
    >
      {text}
    </ButtonStyle>
  );
};
