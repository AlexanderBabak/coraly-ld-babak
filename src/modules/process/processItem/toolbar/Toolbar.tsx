import React, { useState } from "react";
import { Container, Toolbar, Button } from "@mui/material";
import { AppBarStyled } from "components/appBar/AppBarStyled";
import { AddItemPage } from "modules/process/addItem/AddItemPage";
import { DividerVertical } from "./DividerVertical";
import { ViewsGroup } from "./ViewsGroup";
import { TablesGroup } from "./TablesGroup";
import { ActiveGroup } from "./ActiveGroup";
import { IconButtonGroup } from "./IconButtonGroup";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import { StackStyled } from "components/reusable";
import { useAppSelector } from "redux/reduxType";

export const ToolbarStyled = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  const { isDrawerOpen } = useAppSelector((state) => state.pages);

  const styles = {
    appBar: {
      top: 66,
      "& .MuiToolbar-root": { padding: "0 20px 0 10px" },
    },
    button: {
      textTransform: "none",
      borderRadius: "8px",
      fontWeight: 700,
      lineHeight: "28px",
      marginLeft: 1,
    },
  };

  return (
    <AppBarStyled
      position="fixed"
      open={isDrawerOpen}
      role={"app-bar"}
      sx={styles.appBar}
    >
      <Container disableGutters maxWidth="xl">
        <Toolbar>
          <StackStyled direction="row" flexGrow={1} spacing={2}>
            <ViewsGroup />
            <DividerVertical />
            <TablesGroup />
            <DividerVertical />
            <ActiveGroup />
          </StackStyled>

          <StackStyled direction="row" gap={1}>
            <IconButtonGroup />
            <Button
              variant="contained"
              color="primary"
              disableElevation
              onClick={handleOpenModal}
              sx={styles.button}
              startIcon={<AddCircleOutlineOutlinedIcon />}
            >
              Add
            </Button>
          </StackStyled>
        </Toolbar>
      </Container>
      <AddItemPage openModal={openModal} handleCloseModal={handleCloseModal} />
    </AppBarStyled>
  );
};
