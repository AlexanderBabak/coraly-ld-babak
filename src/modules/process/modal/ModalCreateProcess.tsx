import React from "react";
import { StyledButton, StyledTypography } from "components/reusable";
import { IconButton, Stack, Box, Modal } from "@mui/material";
import { InputCards } from "components/reusable/InputCards";
import { InputIcon } from "components/customInputs/InputIcon";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

type Props = {
  openModal: boolean;
  handleCloseModal: () => void;
};

export const ModalCreateProcess: React.FC<Props> = ({
  openModal,
  handleCloseModal,
}) => {
  const styles = {
    content: {
      position: "absolute",
      top: "50%",
      left: "55%",
      transform: "translate(-50%, -50%)",
      width: 600,
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
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          paddingBottom={3}
        >
          <StyledTypography fontWeight={700} fontSize={20} lineHeight="36px">
            Create a new process
          </StyledTypography>
          <IconButton onClick={handleCloseModal}>
            <CloseOutlinedIcon />
          </IconButton>
        </Stack>
        <InputCards label="Process name" fullWidth />
        <InputIcon />

        <Stack flexDirection="row" justifyContent="flex-end">
          <StyledButton
            text="Annula"
            fullWidth={false}
            variant="outlined"
            onClick={handleCloseModal}
          ></StyledButton>
          <StyledButton
            text="Crea"
            fullWidth={false}
            marginleft="16px"
            color="secondary"
            disableElevation={true}
            onClick={() => console.log("Create Process!")}
          ></StyledButton>
        </Stack>
      </Box>
    </Modal>
  );
};
