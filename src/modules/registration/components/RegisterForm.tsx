import { Box } from "@mui/material";
import {
  StyledInput,
  StyledCheckbox,
  StyledTypography,
  StyledButton,
  StyledLink,
} from "components/reusable";
import { AuthNavigation } from "components/navigation/AuthNavigation";
import { AuthTitle } from "components/AuthTitle";

// разобраться handleSubmit пример из баскета

export const RegisterForm = ({ handleSubmit, onSubmit, errors, register }) => {
  return (
    <Box display="flex" flexDirection="column">
      <AuthTitle
        title="Create your workspace"
        subtitle="Coraly is the tool to manage your work processes form the same place"
      />
      <Box component="form" onSubmit={handleSubmit(onSubmit)} marginBottom={4}>
        <StyledInput
          label="Workspace Name"
          error={!!errors?.workspaceName}
          helperText={
            errors?.workspaceName ? errors?.workspaceName.message : " "
          }
          validation={{
            ...register("workspaceName", {
              required: "Workspace Name is required",
              minLength: {
                value: 2,
                message: "Minimum 2 characters",
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
          justifyContent="flex-start"
          alignItems="center"
          marginBottom={2}
        >
          <StyledCheckbox />
          <StyledTypography fontSize={14} color={"#312E43"}>
            Agree with{" "}
            <StyledLink linkText="Terms and Conditions" linkTo="/terms" />,{" "}
            <StyledLink linkText="Privacy Policy" linkTo="/terms" /> and{" "}
            <StyledLink linkText="Cookie Policy" linkTo="/terms" />{" "}
          </StyledTypography>
        </Box>

        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          marginBottom={3}
        >
          <StyledCheckbox />
          <StyledTypography fontSize={14} color={"#312E43"}>
            I authorize Coraly to process my personal data in order to receive
            informational, promotional and commercial communications via e-mail.
          </StyledTypography>
        </Box>

        <StyledButton text="Create now the account" color="secondary" />
      </Box>
      <AuthNavigation
        title="Do you have an account?"
        linkText="Sign in"
        linkTo="/login"
      />
    </Box>
  );
};
