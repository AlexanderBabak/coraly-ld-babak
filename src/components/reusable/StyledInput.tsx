import React from "react";
import { TextField, styled, CSSObject } from "@mui/material";

const Input = styled(TextField)(({ theme }): CSSObject => {
  return {
    "& label.Mui-focused": {
      fontWeight: theme.typography.fontWeightBold,
    },
    ".MuiInputBase-root": { borderRadius: "8px" },
    ".MuiInputBase-input, .MuiFormLabel-root": {
      fontSize: theme.typography.fontSize,
      fontWeight: theme.typography.fontWeightRegular,
      color: theme.palette.text.secondary,
      lineHeight: "18px",
    },
    ".Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.info.main,
    },
    ".MuiFormHelperText-root": {
      marginBottom: "3px",
    },
  };
});

type Props = {
  type?: string;
  size?: "small" | "medium" | undefined;
  helperText: string | undefined;
  fullWidth?: boolean;
  color?:
    | "error"
    | "info"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | undefined;
  validation?: any;
  label: string;
  error: boolean | undefined;
};

export const StyledInput: React.FC<Props> = ({
  type = "text",
  size = "small",
  helperText = " ",
  fullWidth = true,
  color = "info",
  validation,
  ...restProps
}) => {
  return (
    <Input
      type={type}
      size={size}
      color={color}
      fullWidth={fullWidth}
      helperText={helperText}
      {...restProps}
      {...validation}
    />
  );
};

/*
export function StyledInput({
  type = "text",
  size = "small",
  helperText = " ",
  fullWidth = true,
  color = "info",
  validation,
  ...restProps
}) {
  return (
    <Input
      type={type}
      size={size}
      color={color}
      fullWidth={fullWidth}
      helperText={helperText}
      {...restProps}
      {...validation}
    />
  );
}

*/
