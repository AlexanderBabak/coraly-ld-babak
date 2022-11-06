import { AppBarStyled } from "components/appBar/AppBarStyled";
import { Stack, Container, Toolbar } from "@mui/material";
import React from "react";
import { useAppSelector } from "redux/reduxType";

export const PaginationBar = () => {
  const { isDrawerOpen } = useAppSelector((state) => state.pages);

  return (
    <AppBarStyled
      position="fixed"
      open={isDrawerOpen}
      role={"app-bar"}
      sx={{
        top: 132,
        background: "#F6F8FA",
        border: "none",
        "& .MuiToolbar-root": { padding: "0 20px 0 10px" },
      }}
    >
      <Container disableGutters maxWidth="xl">
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            flexGrow={1}
            spacing={2}
          ></Stack>
        </Toolbar>
      </Container>
    </AppBarStyled>
  );
};
