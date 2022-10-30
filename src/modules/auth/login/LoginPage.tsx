import { useState } from "react";
import { useForm } from "react-hook-form";
import { CircularProgress, useTheme } from "@mui/material";
import { LoginForm } from "./LoginForm";
import { LoginLayout } from "components/layouts/LoginLayout";
import { StyledSnackbar } from "components/reusable";
import BannerLogin from "assets/BannerLogin.png";
import { useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { getUserThunk } from "../authorizationAction";

export const LoginPage = () => {
  const [errorLogin, setErrorlogin] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { loadingAuth } = useSelector((state) => state.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = ({ email, password }) => {
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

  const { palette } = useTheme();

  return (
    <LoginLayout banner={BannerLogin} maxWidth={"320px"}>
      {loadingAuth ? (
        <CircularProgress sx={{ marginLeft: 15, marginTop: 15 }} />
      ) : (
        <LoginForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
          register={register}
        />
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
