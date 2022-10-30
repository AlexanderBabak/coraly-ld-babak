import { useNavigate } from "react-router";
import { Box, Container, Stack, useTheme } from "@mui/material";
import NotFound from "assets/NotFound.png";
import { StyledButton, StyledTypography } from "components/reusable";

export const NotFoundPage = () => {
  const { palette, typography } = useTheme();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  const styles = {
    stack: {
      paddingTop: 30,
    },
    text: {
      textAlign: "center",
    },
  };
  return (
    <Container maxWidth="lg" sx={styles.stack} disableGutters>
      <Container maxWidth="sm" disableGutters>
        <Stack rowGap={2}>
          <Box component="img" src={NotFound} />
          <Stack alignItems="center" rowGap={2}>
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
              sx={styles.text}
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
