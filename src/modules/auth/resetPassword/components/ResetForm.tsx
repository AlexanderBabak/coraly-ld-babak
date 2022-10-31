import { Box } from "@mui/material";
import { AuthNavigation } from "components/navigation/AuthNavigation";
import { AuthTitle } from "components/AuthTitle";
import { StyledButton, StyledInput } from "components/reusable";
import { LoginParams } from "api/auth/authDto";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

interface FormProps {
  register: UseFormRegister<LoginParams>;
  handleSubmit: UseFormHandleSubmit<LoginParams>;
  errors: FieldErrors<LoginParams>;
  onSubmit: () => void;
}

export const ResetForm = ({
  handleSubmit,
  onSubmit,
  errors,
  register,
}: FormProps) => {
  return (
    <Box display="flex" flexDirection="column">
      <AuthTitle
        title="Do you forgot your password?"
        subtitle="Insert your email and we will send you a link in your email box to reset your password."
      />
      <Box component="form" onSubmit={handleSubmit(onSubmit)} marginBottom={4}>
        <StyledInput
          label="Email"
          error={!!errors?.email}
          helperText={errors?.email ? errors?.email.message : " "}
          validation={{
            ...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  // eslint-disable-next-line no-useless-escape
                  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
                message: "Invalid email",
              },
            }),
          }}
        />

        <StyledButton text="Reset Password" color="primary" />
      </Box>
      <AuthNavigation title="Go back to" linkText="Login" linkTo="/login" />
    </Box>
  );
};
