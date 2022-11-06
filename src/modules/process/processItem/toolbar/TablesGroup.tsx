import { IconButton, useTheme } from "@mui/material";
import { StackStyled, StyledTypography } from "components/reusable";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";

export const TablesGroup = () => {
  const { palette, typography } = useTheme();
  const styles = {
    iconButton: {
      "&:hover, &:active": { borderRadius: 1 },
    },
  };
  return (
    <StackStyled>
      <IconButton sx={styles.iconButton}>
        <FormatListBulletedOutlinedIcon color="primary" />
      </IconButton>
      <StyledTypography
        fontSize={12}
        fontWeight={typography.fontWeightMedium}
        lineHeight="18px"
        color={palette.grey[700]}
      >
        Tables
      </StyledTypography>
      <IconButton disableFocusRipple size="small">
        <ExpandMoreOutlinedIcon color="disabled" />
      </IconButton>
    </StackStyled>
  );
};
