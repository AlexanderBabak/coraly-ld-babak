import React from "react";
import { StyledTypography, InputCards } from "components/reusable";
import {
  Stack,
  useTheme,
  Divider,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

export const CompanyData = () => {
  const { palette, typography } = useTheme();

  const styles = {
    iconDesc: { color: "#9897A1" },
    divider: { borderRightWidth: 2, height: 150 },
    inputCards: { paddingBottom: 0 },
    radio: { padding: "5px" },
    formControl: {
      "& .MuiFormControlLabel-label": {
        fontSize: typography.fontSize,
        lineHeight: "18px",
      },
    },
  };

  return (
    <Stack spacing={2}>
      <StyledTypography
        color={palette.text.primary}
        fontWeight={typography.fontWeightMedium}
        lineHeight="24px"
      >
        Company data
      </StyledTypography>
      <Stack direction="row" spacing={2}>
        <Stack alignItems="center" spacing={1}>
          <DescriptionOutlinedIcon sx={styles.iconDesc} />
          <Divider orientation="vertical" sx={styles.divider} />
        </Stack>

        <Stack spacing={2} flexGrow={1}>
          <InputCards
            label="Company name"
            size="small"
            sx={styles.inputCards}
          />
          <InputCards label="Surname" size="small" sx={styles.inputCards} />
          <FormControl>
            <RadioGroup defaultValue="person">
              <FormControlLabel
                value="company"
                control={<Radio sx={styles.radio} />}
                label="Company"
                sx={styles.formControl}
              />
              <FormControlLabel
                value="person"
                control={<Radio sx={styles.radio} />}
                label="Person"
                sx={styles.formControl}
              />
            </RadioGroup>
          </FormControl>
        </Stack>
      </Stack>
    </Stack>
  );
};
