import React from "react";
import { Stack, Box, Modal } from "@mui/material";
import { HeaderAddItemPage } from "./headerAddItem/HeaderAddItemPage";
import { LeftMainAddItemPage } from "./leftMainAddItem/LeftMainAddItemPage";
import { RightMainAddItemPage } from "./rightMainAddItem/RightMainAddItemPage";
import { FooterAddItemPage } from "./footerAddItem/FooterAddItemPage";

type Props = {
  openModal: boolean;
  handleCloseModal: () => void;
};

export const AddItemPage: React.FC<Props> = ({
  openModal,
  handleCloseModal,
}) => {
  const styles = {
    content: {
      position: "absolute",
      top: "50%",
      left: "52%",
      transform: "translate(-50%, -50%)",
      width: "88%",
      bgcolor: "background.paper",
      borderRadius: "15px",
      p: 4,
      justifyContent: "space-between",
      display: "flex",
      flexDirection: "column",
    },
  };
  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.content}>
        <HeaderAddItemPage handleCloseModal={handleCloseModal} />

        <Stack direction="row" justifyContent="space-between" marginTop={1}>
          <LeftMainAddItemPage />
          <RightMainAddItemPage />
        </Stack>

        <FooterAddItemPage handleCloseModal={handleCloseModal} />
      </Box>
    </Modal>
  );
};
