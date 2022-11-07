import React from "react";
import { StyledButton, StyledTypography } from "components/reusable";
import { Stack, Box, useTheme } from "@mui/material";

type Props = {
  handleCloseModal: () => void;
};

export const FooterAddItemPage: React.FC<Props> = ({ handleCloseModal }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      marginTop={2}
    >
      <StyledTypography
        color="#464356"
        fontWeight={600}
        fontSize={16}
        lineHeight="24px"
      >
        Fase ID:{" "}
        <Box
          component="span"
          sx={{ fontWeight: 400, fontSize: 14, lineHeight: "18px" }}
        >
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
