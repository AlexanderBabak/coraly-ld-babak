import React from "react";
import { StyledButton, StyledTypography } from "components/reusable";
import { IconButton, Stack, Box, Modal, Divider, Link } from "@mui/material";
import { InputCards } from "components/reusable/InputCards";
import { InputIcon } from "components/customInputs/InputIcon";

import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import CenterFocusWeakOutlinedIcon from "@mui/icons-material/CenterFocusWeakOutlined";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import PlaylistRemoveOutlinedIcon from "@mui/icons-material/PlaylistRemoveOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { DividerVertical } from "../processItem/toolbar/DividerVertical";

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
      left: "50%",
      transform: "translate(-50%, -50%)",
      // здесь width
      minWidth: 1200,
      bgcolor: "background.paper",
      borderRadius: "15px",
      p: 3,
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
        <Stack direction="row" justifyContent="space-between">
          <StyledTypography fontSize={20} fontWeight={700} lineHeight="36px">
            Courtney@mail.com
          </StyledTypography>
          <Stack direction="row" spacing={2}>
            <Stack direction="row" alignItems="center" spacing="5px">
              <RemoveRedEyeOutlinedIcon color="primary" />
              <Link href="#" fontWeight={600}>
                KO Motivation
              </Link>
            </Stack>
            <Stack direction="row" spacing="5px">
              <IconButton>
                <FolderOutlinedIcon />
              </IconButton>
              <IconButton>
                <CenterFocusWeakOutlinedIcon />
              </IconButton>
              <IconButton>
                <LinkOutlinedIcon />
              </IconButton>
              <IconButton>
                <PlaylistRemoveOutlinedIcon />
              </IconButton>
              <IconButton>
                <DeleteOutlinedIcon />
              </IconButton>
            </Stack>
            <Stack direction="row">
              <DividerVertical />
              <IconButton onClick={handleCloseModal}>
                <CloseOutlinedIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
        <Stack>{/* left side */}</Stack>
        <Stack>{/* right side */}</Stack>
      </Box>
    </Modal>
  );
};
