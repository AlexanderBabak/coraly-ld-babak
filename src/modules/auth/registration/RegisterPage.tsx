import { useState } from "react";
import { useForm } from "react-hook-form";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "./components/RegisterForm";

const actionCodeSettings = {
  url: "http://localhost:3000/register/complete",
  handleCodeInApp: true,
};

export const RegisterPage = () => {
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = ({ workspaceName, email }) => {
    const auth = getAuth();
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        localStorage.setItem("user", JSON.stringify({ email, workspaceName }));
        navigate("/register/email-sent");
      })
      .finally(); // снимаю лоадер
  };

  return (
    <RegisterForm
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
      register={register}
    />
  );
};
