import React, { useState } from "react";
import { MenuItem, TextField, useTheme } from "@mui/material";

const currencies = [
  {
    value: "1",
    label: "Mensile",
  },
  {
    value: "2",
    label: "Year",
  },
  {
    value: "3",
    label: "Daily",
  },
];

export const ContractTypeMensile = () => {
  const [currency, setCurrency] = useState("1");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const { palette, typography } = useTheme();
  return (
    <TextField
      id="outlined-select-currency"
      select
      label="Contract type"
      fullWidth
      size="small"
      color="info"
      value={currency}
      onChange={handleChange}
      sx={{
        paddingBottom: 1,
        marginTop: 2,
        ".MuiInputBase-root": { borderRadius: "8px" },
        ".MuiFormLabel-root": {
          fontSize: typography.fontSize,
          fontWeight: typography.fontWeightRegular,
          color: palette.text.secondary,
          lineHeight: "18px",
        },
      }}
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
