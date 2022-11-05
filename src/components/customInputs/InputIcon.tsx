import React, { useState } from "react";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  styled,
} from "@mui/material";

const FormControlStyled = styled(FormControl)(({ theme }) => ({
  paddingBottom: 24,
  borderRadius: 8,
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

export const InputIcon = () => {
  const [value, setValue] = useState("#FF2200");

  return (
    <FormControlStyled variant="outlined" fullWidth>
      <InputLabel htmlFor="outlined-adornment-password">Color</InputLabel>
      <OutlinedInput
        id="outlined-adornment-password"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => console.log("Color picker!")}
              edge="end"
            >
              <PaletteOutlinedIcon />
            </IconButton>
          </InputAdornment>
        }
        label="Color"
      />
    </FormControlStyled>
  );
};
