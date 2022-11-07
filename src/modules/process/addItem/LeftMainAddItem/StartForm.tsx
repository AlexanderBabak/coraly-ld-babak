import React from "react";
import { StyledTypography, InputCards } from "components/reusable";
import { Stack, useTheme } from "@mui/material";

export const StartForm = () => {
  const { palette, typography } = useTheme();
  const styles = {
    inputCards: { paddingBottom: 0 },
  };
  return (
    <Stack spacing={2}>
      <StyledTypography
        color={palette.text.primary}
        fontWeight={typography.fontWeightMedium}
        lineHeight="24px"
      >
        Startform Name
      </StyledTypography>
      <InputCards label="Email" size="small" sx={styles.inputCards} />
      <InputCards
        label="Description test"
        size="small"
        helperText="This is a description"
        multiline
        minRows={2}
        sx={styles.inputCards}
      />
    </Stack>
  );
};
