import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";

export const StyledLink = ({ linkText, linkTo, ...restProps }) => {
  const { palette, typography } = useTheme();

  const styles = {
    link: {
      textDecoration: "none",
      color: palette.secondary.main,
      fontFamily: typography.fontFamily,
      fontWeight: typography.fontWeightMedium,
      fontSize: typography.fontSize,
    },
  };
  return (
    <Link to={linkTo} style={styles.link} {...restProps}>
      {linkText}
    </Link>
  );
};
