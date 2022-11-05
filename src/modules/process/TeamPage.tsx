import { StyledTypography } from "components/reusable";
import { useTheme, Stack } from "@mui/material";

export const TeamPage = () => {
  const { palette, typography } = useTheme();
  return (
    <Stack marginTop={10} spacing={2}>
      <StyledTypography
        fontSize={36}
        lineHeight="45px"
        fontWeight={typography.fontWeightBold}
        color={palette.text.primary}
      >
        Welcome to my Team!
      </StyledTypography>

      <StyledTypography
        fontSize={20}
        lineHeight="30px"
        fontWeight={typography.fontWeightLight}
        color={palette.text.secondary}
      >
        Work with your team mates, take track of your process and close all
        tasks
      </StyledTypography>
    </Stack>
  );
};
