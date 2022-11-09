import { Divider } from "@mui/material";

export const DividerVertical = () => {
  const styles = {
    divider: { borderRightWidth: 2 },
  };
  return (
    <Divider
      orientation="vertical"
      variant="middle"
      flexItem
      sx={styles.divider}
    />
  );
};
