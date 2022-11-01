import { Box } from "@mui/material";
import { AuthTitle } from "components/AuthTitle";
import { Frame } from "assets/icons/Frame";

export const ResetEmailForm = () => {
  return (
    <Box>
      <AuthTitle
        title="Email was sent!"
        subtitle="Check your email inbox. We sent you an email to edit your password. If you didn’t received the email, please check your SPAM inbox"
      />
      <Box>
        <Frame />
      </Box>
    </Box>
  );
};
