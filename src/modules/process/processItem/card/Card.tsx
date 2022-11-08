import { Stack, Paper, Box } from "@mui/material";
import { CardBottomMenu } from "./CardBottomMenu";
import { CardInputs } from "./CardInputs";

export const Card = () => {
  const styles = {
    box: {
      display: "flex",
      flexDirection: "column",
      position: "absolute",
      top: 0,
      right: 0,
      "& > :not(style)": {
        m: 1,
        width: 381,
        height: "100vh",
        margin: 0,
        boxSizing: "border-box",
      },
    },
    paper: { padding: 2 },
  };
  return (
    <Box sx={styles.box}>
      <Paper variant="outlined" square sx={styles.paper}>
        <Stack justifyContent="space-between" height={"85%"}>
          <CardInputs />
          <CardBottomMenu />
        </Stack>
      </Paper>
    </Box>
  );
};
