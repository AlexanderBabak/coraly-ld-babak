import { IconButton } from "@mui/material";
import React from "react";

export const IconButtonWrapper: React.FC<any> = ({ children }) => {
  const styles = {
    "&:active, &:hover": { color: "red" },
  };

  return <IconButton sx={styles}>{children}</IconButton>;
};
