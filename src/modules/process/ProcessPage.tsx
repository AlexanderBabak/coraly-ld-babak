import { StyledTypography } from "components/reusable";
import { useEffect, useState } from "react";
import { getUserThunk } from "modules/auth/authorizationThunk";
import { useAppDispatch, useAppSelector } from "redux/reduxType";
import { Stack, useTheme, Grid, CircularProgress } from "@mui/material";
import { getCardsThunk } from "./processThunk";
import { ProcessCard } from "./processCard/ProcessCard";
import { CreateProcessCard } from "./processCard/CreateProcessCard";

import { ModalCreateProcess } from "./modal/ModalCreateProcess";

export const ProcessPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

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
              <CreateProcessCard handleOpen={handleOpenModal} />
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
          <ModalCreateProcess
            openModal={openModal}
            handleCloseModal={handleCloseModal}
          />
        </>
      )}
    </>
  );
};
