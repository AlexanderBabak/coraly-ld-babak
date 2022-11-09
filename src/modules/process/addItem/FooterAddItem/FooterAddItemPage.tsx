import React from "react";
import { StyledButton, StyledTypography } from "components/reusable";
import { Stack, Box, useTheme } from "@mui/material";

type Props = {
  handleCloseModal: () => void;
};

export const FooterAddItemPage: React.FC<Props> = ({ handleCloseModal }) => {
  const { palette, typography } = useTheme();
  const styles = {
    box: {
      fontWeight: typography.fontWeightRegular,
      fontSize: typography.fontSize,
      lineHeight: "18px",
    },
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      marginTop={2}
    >
      <StyledTypography
        color={palette.text.primary}
        fontWeight={typography.fontWeightMedium}
        fontSize={16}
        lineHeight="24px"
      >
        Fase ID:{" "}
        <Box component="span" sx={styles.box}>
          61571535e7058c00143322b8
        </Box>
      </StyledTypography>
      <Stack flexDirection="row" justifyContent="flex-end">
        <StyledButton
          text="Annula"
          fullWidth={false}
          variant="outlined"
          onClick={handleCloseModal}
        ></StyledButton>
        <StyledButton
          text="Crea"
          fullWidth={false}
          marginleft="16px"
          color="secondary"
          disableElevation={true}
          onClick={() => console.log("Create Process!")}
        ></StyledButton>
      </Stack>
    </Stack>
  );
};
