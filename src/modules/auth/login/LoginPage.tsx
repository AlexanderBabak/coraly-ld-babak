import { useState } from "react";
import { CircularProgress, useTheme } from "@mui/material";
import { LoginForm } from "./LoginForm";
import { LoginLayout } from "components/layouts/LoginLayout";
import { StyledSnackbar } from "components/reusable";
import { useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useAppDispatch, useAppSelector } from "redux/reduxType";
import { getUserThunk } from "../authorizationAction";
import { LoginSubmitProps } from "interfaces/submitProps";
import BannerLogin from "assets/BannerLogin.png";

export const LoginPage = () => {
  const [errorLogin, setErrorlogin] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { loadingAuth } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { palette } = useTheme();

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const onSubmit: LoginSubmitProps = ({ email, password }) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setErrorlogin(false);
        setOpenSnackbar(true);
        dispatch(getUserThunk());
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch(() => {
        setErrorlogin(true);
        setOpenSnackbar(true);
      });
  };

  return (
    <LoginLayout banner={BannerLogin} maxWidth={"320px"}>
      {loadingAuth ? (
        <CircularProgress sx={{ marginLeft: 15, marginTop: 15 }} />
      ) : (
        <LoginForm onSubmit={onSubmit} />
      )}

      {errorLogin ? (
        <StyledSnackbar
          open={openSnackbar}
          setOpen={setOpenSnackbar}
          handleClose={handleCloseSnackbar}
          severity="error"
          color={palette.error.main}
          alertMessage="Credenziali non valide"
        />
      ) : (
        <StyledSnackbar
          open={openSnackbar}
          setOpen={setOpenSnackbar}
          handleClose={handleCloseSnackbar}
          severity="success"
          alertMessage="Utente autenticato con successo"
        />
      )}
    </LoginLayout>
  );
};
