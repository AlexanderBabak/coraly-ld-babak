import { Box } from "@mui/material";
import { AuthTitle } from "components/AuthTitle";
import { StyledInput, StyledButton } from "components/reusable";

export const ResetCompleteForm = ({
  handleSubmit,
  onSubmit,
  errors,
  register,
}) => {
  return (
    <Box display="flex" flexDirection="column">
      <AuthTitle
        title="Insert new password"
        subtitle="Enter your new password to access the platform"
      />
      <Box component="form" onSubmit={handleSubmit(onSubmit)} marginBottom={4}>
        <StyledInput
          label="New password"
          type="password"
          error={!!errors?.newPassword}
          helperText={errors?.newPassword ? errors?.newPassword.message : " "}
          validation={{
            ...register("newPassword", {
              required: "New password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
              },
            }),
          }}
        />

        <StyledInput
          label="Confirm new password"
          type="password"
          error={!!errors?.confirmPassword}
          helperText={
            errors?.confirmPassword ? errors?.confirmPassword.message : " "
          }
          validation={{
            ...register("confirmPassword", {
              required: "Confirm new password is required",
              minLength: {
                value: 6,
                message: "Minimum 6 characters",
                // добавить что паспорт не совпадает
              },
            }),
          }}
        />

        <StyledButton text="Confirm new password" color="primary" />
      </Box>
    </Box>
  );
};
