import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterCompleteForm } from "./components/RegisterCompleteForm";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { StyledSnackbar } from "components/reusable";
import { useTheme } from "@mui/material";
import { CompleteSubmitProps } from "interfaces/submitProps";

export const RegisterCompletePage = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [errorLogin, setErrorlogin] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { palette } = useTheme();
  const navigate = useNavigate();

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const email = localStorage.getItem("userEmail");

  const onSubmit: CompleteSubmitProps = ({ password }) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setErrorlogin(false);
        setOpenSnackbar(true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((err) => {
        setErrorMessage(err.message);
        setErrorlogin(true);
        setOpenSnackbar(true);
      });
  };

  return (
    <>
      <RegisterCompleteForm onSubmit={onSubmit} />

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
