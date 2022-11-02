import { StyledTypography } from "components/reusable";
import { useEffect } from "react";
import { getUserThunk } from "modules/auth/authorizationAction";
import { useAppDispatch, useAppSelector } from "redux/reduxType";
import { Stack, useTheme, Grid } from "@mui/material";
import { ProcessCard } from "modules/process/processCard/ProcessCard";

export const ProcessPage = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserThunk());
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
        <Grid item>
          <ProcessCard />
        </Grid>
        <Grid item>
          <ProcessCard />
        </Grid>
        <Grid item>
          <ProcessCard />
        </Grid>
        <Grid item>
          <ProcessCard />
        </Grid>
      </Grid>
    </>
  );
};
