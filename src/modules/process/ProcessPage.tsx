import { StyledTypography } from "components/reusable";
import { useEffect } from "react";
import { getUserThunk } from "modules/auth/authorizationAction";
import { useAppDispatch, useAppSelector } from "redux/reduxType";
import { Stack, useTheme, Grid } from "@mui/material";
import { getCardsThunk } from "./processThunk";
import { ProcessCard } from "./processCard/ProcessCard";

export const ProcessPage = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { processCards } = useAppSelector((state) => state.pages);

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
      <Grid container spacing={2} marginTop={1}>
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
    </>
  );
};
