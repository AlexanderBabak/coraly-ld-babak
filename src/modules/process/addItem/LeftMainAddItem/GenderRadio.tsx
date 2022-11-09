import React from "react";
import { StyledTypography } from "components/reusable";
import {
  Stack,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  useTheme,
} from "@mui/material";

export const GenderRadio = () => {
  const { palette, typography } = useTheme();

  const styles = {
    formControl: { paddingLeft: 1 },
    radio: { padding: "5px" },
    formControlLabel: {
      "& .MuiFormControlLabel-label": {
        fontSize: typography.fontSize,
        lineHeight: "18px",
      },
    },
  };

  return (
    <Stack spacing={2}>
      <StyledTypography
        color={palette.info.light}
        fontWeight={typography.fontWeightMedium}
        lineHeight="24px"
      >
        Gender
      </StyledTypography>
      <FormControl sx={styles.formControl}>
        <RadioGroup defaultValue="female">
          <FormControlLabel
            value="male"
            control={<Radio sx={styles.radio} />}
            label="Male"
            sx={styles.formControlLabel}
          />
          <FormControlLabel
            value="female"
            control={<Radio sx={styles.radio} />}
            label="Female"
            sx={styles.formControlLabel}
          />
          <FormControlLabel
            value="not declared"
            control={<Radio sx={styles.radio} />}
            label="Not declared"
            sx={styles.formControlLabel}
          />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};
