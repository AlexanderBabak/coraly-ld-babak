import { useForm } from "react-hook-form";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RegisterCompleteForm } from "./components/RegisterCompleteForm";
import { setUser } from "Trash/redux first/store/slices/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { StyledSnackbar } from "components/reusable";
import { useTheme } from "@mui/material";

export const RegisterCompletePage = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorLogin, setErrorlogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { palette } = useTheme();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { email, workspaceName } = JSON.parse(localStorage.getItem("user"));

  const onSubmit = ({ name, surname, password }) => {
    console.log(name, password, surname, email, workspaceName);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        setErrorlogin(false);
        setOpenSnackbar(true);
        localStorage.setItem(
          "userData",
          JSON.stringify({ name, surname, workspaceName })
        );
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            name,
            surname,
            workspaceName,
          })
        );
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setErrorlogin(true);
        setOpenSnackbar(true);
      })
      .finally(); // снимаю лоадер
  };

  return (
    <>
      <RegisterCompleteForm
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        register={register}
      />

      {errorLogin ? (
        <StyledSnackbar
          open={openSnackbar}
          setOpen={setOpenSnackbar}
          handleClose={handleCloseSnackbar}
          severity="error"
          color={palette.error.main}
          alertMessage={errorMessage}
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
    </>
  );
};
