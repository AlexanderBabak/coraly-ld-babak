import { Link } from "react-router-dom";
import { FC } from "react";
import { useTheme } from "@mui/material";

type Props = {
  linkText: string;
  linkTo: string;
};

export const StyledLink: FC<Props> = ({ linkText, linkTo, ...restProps }) => {
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
