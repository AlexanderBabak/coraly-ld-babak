import { useForm } from "react-hook-form";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "./components/RegisterForm";
import { RegisterParams } from "api/auth/authDto";
import { RegisterSubmitProps } from "interfaces/submitProps";

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
  } = useForm<RegisterParams>();

  const onSubmit: RegisterSubmitProps = ({ email }) => {
    const auth = getAuth();
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        localStorage.setItem("userEmail", email);
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
