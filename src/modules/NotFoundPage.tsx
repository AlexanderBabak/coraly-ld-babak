import { useNavigate } from "react-router";
import { Box, Container, Stack, useTheme } from "@mui/material";
import NotFound from "assets/NotFound.png";
import { StyledButton, StyledTypography } from "components/reusable";

export const NotFoundPage = () => {
  const { palette, typography } = useTheme();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <Container maxWidth="lg" disableGutters>
      <Container maxWidth="sm" disableGutters>
        <Stack rowGap={2} padding="200px 0">
          <Box component="img" src={NotFound} />
          <Stack alignItems="center" rowGap={2} textAlign="center">
            <StyledTypography
              fontSize={24}
              fontWeight={typography.fontWeightBold}
              color={palette.text.primary}
            >
              Page not found
            </StyledTypography>
            <StyledTypography
              fontSize={14}
              fontWeight={typography.fontWeightRegular}
              color={palette.text.secondary}
              lineHeight="18px"
            >
              The page you are trying to reach is not available. It may have
              been deleted or its URL was misspelled.
            </StyledTypography>
            <StyledButton text="Go back" fullWidth={false} onClick={goBack} />
          </Stack>
        </Stack>
      </Container>
    </Container>
  );
};
