import { Button, styled } from "@mui/material";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { CSSObject } from "@mui/material/styles";

interface ButtonProps extends MuiButtonProps {
  isActive?: boolean;
  backgroundColor?: string;
}

export const ToolbarButton = styled(Button)<ButtonProps>(
  ({ isActive, backgroundColor }): CSSObject => ({
    fontSize: "12px",
    fontWeight: 600,
    padding: "5px 10px",
    textTransform: "none",
    color: isActive ? "#5A5869" : "#83828E",
    backgroundColor: isActive ? backgroundColor : "transparent",
    "&:hover": {
      backgroundColor: isActive ? backgroundColor : "transparent",
    },
  })
);
