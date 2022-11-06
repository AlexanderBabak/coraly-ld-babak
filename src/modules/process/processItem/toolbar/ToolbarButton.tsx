import { Button, styled } from "@mui/material";
import { ButtonProps as MuiButtonProps } from "@mui/material/Button";
import { CSSObject } from "@mui/material/styles";

interface ButtonProps extends MuiButtonProps {
  active?: boolean;
  backgroundcolor?: string;
}

export const ToolbarButton = styled(Button)<ButtonProps>(
  ({ active, backgroundcolor }): CSSObject => ({
    fontSize: "12px",
    fontWeight: 600,
    padding: "5px 10px",
    textTransform: "none",
    color: active ? "#5A5869" : "#83828E",
    backgroundColor: active ? backgroundcolor : "transparent",
    "&:hover": {
      backgroundColor: active ? backgroundcolor : "transparent",
    },
  })
);
