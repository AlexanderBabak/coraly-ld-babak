import { Box, useTheme } from "@mui/material";
import { StyledTypography } from "components/reusable";
import { StyledLink } from "components/reusable";

type Props = {
  title: string;
  linkText: string;
  linkTo: string;
};

export const AuthNavigation: React.FC<Props> = ({
  title,
  linkText,
  linkTo,
}) => {
  const { palette, typography } = useTheme();

  return (
    <Box display="flex" justifyContent="flex-start" alignItems="center">
      <StyledTypography
        marginRight={1}
        color={palette.text.primary}
        fontSize={typography.fontSize}
      >
        {title}
      </StyledTypography>
      <StyledLink linkText={linkText} linkTo={linkTo} />
    </Box>
  );
};
