import { TextField, styled } from "@mui/material";

export const InputCards = styled(TextField)(({ theme }) => ({
  paddingBottom: 24,
  "& label.Mui-focused": {
    color: theme.palette.info.main,
    fontWeight: theme.typography.fontWeightBold,
  },
  ".MuiInputBase-input, .MuiFormLabel-root": {
    fontSize: 16,
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.text.secondary,
    lineHeight: "24px",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: 8,
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.info.main,
    },
  },
}));
