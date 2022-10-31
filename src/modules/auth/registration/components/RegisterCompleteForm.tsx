import { Box } from "@mui/material";
import { StyledInput, StyledButton } from "components/reusable";
import { AuthTitle } from "components/AuthTitle";
import { RegisterCompleteParams } from "api/auth/authDto";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { CompleteSubmitProps } from "interfaces/submitProps";

interface FormProps {
  register: UseFormRegister<RegisterCompleteParams>;
  handleSubmit: UseFormHandleSubmit<RegisterCompleteParams>;
  errors: FieldErrors<RegisterCompleteParams>;
  onSubmit: CompleteSubmitProps;
}

export const RegisterCompleteForm = ({
  handleSubmit,
  onSubmit,
  errors,
  register,
}: FormProps) => {
  return (
    <Box display="flex" flexDirection="column">
      <AuthTitle
        title="Complete your profile"
        subtitle="Insert all your info to proceed with your workspace"
      />
      <Box component="form" onSubmit={handleSubmit(onSubmit)} marginBottom={4}>
        <Box display="flex" gap={3}>
          <StyledInput
            label="Name"
            error={!!errors?.name}
            helperText={errors?.name ? errors?.name.message : " "}
            validation={{
              ...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Minimum 2 characters",
                },
              }),
            }}
          />
          <StyledInput
            label="Surname"
            error={!!errors?.surname}
            helperText={errors?.surname ? errors?.surname.message : " "}
            validation={{
              ...register("surname", {
                required: "Surname is required",
                minLength: {
                  value: 2,
                  message: "Minimum 2 characters",
                },
              }),
            }}
          />
        </Box>

        <StyledInput
          label="Password"
          type="password"
          error={!!errors?.password}
          helperText={errors?.password ? errors?.password.message : " "}
          validation={{
            ...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            }),
          }}
        />

        <StyledInput
          label="Repeat Password"
          type="password"
          error={!!errors?.repeatPassword}
          helperText={
            errors?.repeatPassword ? errors?.repeatPassword.message : " "
          }
          validation={{
            ...register("repeatPassword", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            }),
          }}
        />

        <StyledButton text="Complete now" color="secondary" />
      </Box>
    </Box>
  );
};
