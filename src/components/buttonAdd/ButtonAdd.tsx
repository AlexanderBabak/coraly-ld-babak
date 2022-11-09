import React from "react";
import { IconButton } from "@mui/material";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export const ButtonAdd = () => {
  return (
    <IconButton color="primary" sx={{ padding: 0 }}>
      <AddCircleOutlineOutlinedIcon />
    </IconButton>
  );
};
