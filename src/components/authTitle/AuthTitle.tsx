import { Box, useTheme } from "@mui/material";
import { StyledTypography } from "../reusable";

type Props = {
  title: string;
  subtitle: string;
};

export const AuthTitle: React.FC<Props> = ({ title, subtitle }) => {
  const { palette, typography } = useTheme();
  return (
    <Box marginBottom={7}>
      <StyledTypography
        fontSize={24}
        fontWeight={typography.fontWeightBold}
        color={palette.text.primary}
      >
        {title}
      </StyledTypography>
      <StyledTypography fontSize={14} color={palette.text.secondary}>
        {subtitle}
      </StyledTypography>
    </Box>
  );
};
