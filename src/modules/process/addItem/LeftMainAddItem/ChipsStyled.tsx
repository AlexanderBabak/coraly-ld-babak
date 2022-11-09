import React from "react";
import { useTheme, Chip } from "@mui/material";
import { StackStyled } from "components/reusable";
import { ButtonAdd } from "components/buttonAdd/ButtonAdd";

export const ChipsStyled = () => {
  const { palette, typography } = useTheme();

  const styles = {
    label1: {
      bgcolor: "#47BDFF",
      color: palette.grey[600],
      width: 82,
      height: 22,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeightMedium,
      lineHeight: "18px",
    },
    label2: {
      bgcolor: "#E547FF",
      color: palette.grey[600],
      width: 82,
      height: 22,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeightMedium,
      lineHeight: "18px",
    },
    label3: {
      bgcolor: "#FF9F47",
      color: palette.grey[600],
      width: 82,
      height: 22,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeightMedium,
      lineHeight: "18px",
    },
  };

  return (
    <StackStyled direction="row" spacing={1}>
      <Chip label="Label 1" sx={styles.label1} />
      <Chip label="Label 2" sx={styles.label2} />
      <Chip label="Label 3" sx={styles.label3} />
      <ButtonAdd />
    </StackStyled>
  );
};
