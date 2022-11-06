import { IconButton, useTheme } from "@mui/material";
import { StyledTypography, StackStyled } from "components/reusable";
import ViewStreamOutlinedIcon from "@mui/icons-material/ViewStreamOutlined";

export const ViewsGroup = () => {
  const { palette, typography } = useTheme();
  const styles = {
    iconButton: {
      "&:hover, &:active": { borderRadius: 1 },
    },
  };
  return (
    <StackStyled>
      <IconButton sx={styles.iconButton}>
        <ViewStreamOutlinedIcon color="primary" />
      </IconButton>
      <StyledTypography
        fontSize={12}
        fontWeight={typography.fontWeightMedium}
        lineHeight="18px"
        color={palette.grey[700]}
      >
        Views
      </StyledTypography>
    </StackStyled>
  );
};
