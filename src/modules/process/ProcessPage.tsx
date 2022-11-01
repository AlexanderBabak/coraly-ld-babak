import { useNavigate } from "react-router-dom";
import { StyledButton, StyledTypography } from "components/reusable";
import { useEffect } from "react";
import { getUserThunk } from "modules/auth/authorizationAction";
import { signOut } from "modules/auth/authorizationSlice";
import { useAppDispatch, useAppSelector } from "redux/reduxType";
import { Stack, useTheme } from "@mui/material";

export const ProcessPage = () => {
  const { user } = useAppSelector((state) => state.auth);

  const { palette, typography } = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserThunk());
  }, [dispatch]);

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

      {/* <StyledButton
        text="Log out"
        fullWidth={false}
        onClick={() => {
          dispatch(signOut());
          navigate("/login");
        }}
      /> */}
    </>
  );
};
