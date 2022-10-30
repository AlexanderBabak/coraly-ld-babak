import { Box } from "@mui/material";
import { AuthTitle } from "components/AuthTitle";
import { Frame } from "assets/Frame";

export const RegisterEmailForm = () => {
  return (
    <Box>
      <AuthTitle
        title="Your workspace is ready"
        subtitle="Check your email inbox. We sent you a confirmation email."
      />
      <Box>
        <Frame />
      </Box>
    </Box>
  );
};
