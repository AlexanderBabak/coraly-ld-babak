import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  alertMessage: string;
  open: boolean;
  handleClose: () => void;
  color?: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  severity: "success" | "info" | "error" | "warning" | undefined;
};

export const StyledSnackbar: React.FC<Props> = ({
  alertMessage,
  open,
  handleClose,
  color = "#34D182",
  severity,
}) => {
  const styles = {
    alert: {
      width: "100%",
      color,
      fontSize: 16,
      fontWeight: 600,
    },
  };
  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity} sx={styles.alert}>
        {alertMessage}
      </Alert>
    </Snackbar>
  );
};
