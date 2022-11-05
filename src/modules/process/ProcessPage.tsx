import { StyledButton, StyledTypography } from "components/reusable";
import { useEffect, useState } from "react";
import { getUserThunk } from "modules/auth/authorizationThunk";
import { useAppDispatch, useAppSelector } from "redux/reduxType";
import { Stack, useTheme, Grid, CircularProgress } from "@mui/material";
import { getCardsThunk } from "./processThunk";
import { ProcessCard } from "./processCard/ProcessCard";
import { CreateProcessCard } from "./processCard/CreateProcessCard";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { IconButton } from "@mui/material";
import { InputCards } from "components/reusable/InputCards";
import { InputIcon } from "components/customInputs/InputIcon";

const style = {
  position: "absolute",
  top: "50%",
  left: "55%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "15px",
  p: 3,
};

export const ProcessPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { user } = useAppSelector((state) => state.auth);
  const { processCards, loadingCards } = useAppSelector((state) => state.pages);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserThunk());
    dispatch(getCardsThunk());
  }, [dispatch]);

  const { palette, typography } = useTheme();

  return (
    <>
      <Stack maxWidth={584} spacing={2} marginTop={6}>
        <StyledTypography
          fontSize={36}
          lineHeight="45px"
          fontWeight={typography.fontWeightBold}
          color={palette.text.primary}
        >
          Welcome, {user?.name} {user?.surname}
        </StyledTypography>

        <StyledTypography
          fontSize={20}
          lineHeight="30px"
          fontWeight={typography.fontWeightLight}
          color={palette.text.secondary}
        >
          Work with your team mates, take track of your process and close all
          tasks
        </StyledTypography>
      </Stack>
      {loadingCards ? (
        <CircularProgress sx={{ marginLeft: 80, marginTop: 15 }} />
      ) : (
        <>
          <Grid container spacing={2} marginTop={1}>
            <Grid item>
              <CreateProcessCard handleOpen={handleOpen} />
            </Grid>
            {processCards.map((card) => (
              <Grid item key={card.id}>
                <ProcessCard
                  title={card.title}
                  icon={card.icon}
                  id={card.id}
                  isPrivate={card.isPrivate}
                  backgroundColor={card.backgroundColor}
                />
              </Grid>
            ))}
          </Grid>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                paddingBottom={3}
              >
                <StyledTypography
                  fontWeight={700}
                  fontSize={20}
                  lineHeight="36px"
                >
                  Create a new process
                </StyledTypography>
                <IconButton onClick={handleClose}>
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
                  onClick={handleClose}
                ></StyledButton>
                <StyledButton
                  text="Crea"
                  fullWidth={false}
                  marginleft="16px"
                  color="secondary"
                  disableElevation={true}
                ></StyledButton>
              </Stack>
            </Box>
          </Modal>
        </>
      )}
    </>
  );
};
