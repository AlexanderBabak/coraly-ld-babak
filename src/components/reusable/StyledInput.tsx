import { TextField, styled } from "@mui/material";

const Input = styled(TextField)(({ theme }) => {
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
