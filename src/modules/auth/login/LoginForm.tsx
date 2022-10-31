import { Box, useTheme } from "@mui/material";
import { AuthNavigation } from "components/navigation/AuthNavigation";
import { AuthTitle } from "components/AuthTitle";
import { LoginParams } from "api/auth/authDto";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import {
  StyledInput,
  StyledCheckbox,
  StyledTypography,
  StyledButton,
  StyledLink,
} from "components/reusable";
import { LoginSubmitProps } from "interfaces/submitProps";

interface FormProps {
  register: UseFormRegister<LoginParams>;
  handleSubmit: UseFormHandleSubmit<LoginParams>;
  errors: FieldErrors<LoginParams>;
  onSubmit: LoginSubmitProps;
}

export const LoginForm = ({
  handleSubmit,
  onSubmit,
  errors,
  register,
}: FormProps) => {
  const { typography } = useTheme();

  return (
    <Box display="flex" flexDirection="column">
      <AuthTitle title="Log in" subtitle="Thanks to come back on Coraly" />

      <Box component="form" onSubmit={handleSubmit(onSubmit)} marginBottom={4}>
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
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom={4}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <StyledCheckbox />
            <StyledTypography fontSize={typography.fontSize} color={"#464356"}>
              Remember me
            </StyledTypography>
          </Box>

          <StyledLink linkText="Forgot password" linkTo="/reset" />
        </Box>

        <StyledButton text="Login" />
      </Box>
      <AuthNavigation
        title="Don’t you have an account?"
        linkText="Sign up now"
        linkTo="/register"
      />
    </Box>
  );
};
