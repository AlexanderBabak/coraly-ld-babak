import React, { useState } from "react";
import { MenuItem, TextField, useTheme } from "@mui/material";

const currencies = [
  {
    value: "1",
    label: "1 anno",
  },
  {
    value: "2",
    label: "2 anno",
  },
  {
    value: "3",
    label: "3 anno",
  },
  {
    value: "4",
    label: "4 anno",
  },
];

export const ContractTypeYear = () => {
  const [currency, setCurrency] = useState("1");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const { palette, typography } = useTheme();

  const styles = {
    textField: {
      paddingBottom: 3,
      ".MuiInputBase-root": { borderRadius: "8px" },
      ".MuiFormLabel-root": {
        fontSize: typography.fontSize,
        fontWeight: typography.fontWeightRegular,
        color: palette.text.secondary,
        lineHeight: "18px",
      },
    },
  };

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
      sx={styles.textField}
    >
      {currencies.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
