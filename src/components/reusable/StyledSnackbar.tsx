import { Alert, Snackbar } from "@mui/material";

export function StyledSnackbar({
  alertMessage,
  open,
  handleClose,
  color = "#34D182",
  severity,
}) {
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
}
