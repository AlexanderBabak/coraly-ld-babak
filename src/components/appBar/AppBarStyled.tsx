import { CSSObject, styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar/AppBar";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

export const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(
  ({ theme, open }): CSSObject => ({
    background: theme.palette.common.white,
    boxShadow: "none",
    width: `calc(100% - 80px)`,
    zIndex: theme.zIndex.drawer + 1,
    borderBottom: "2px solid #D6D5D9",
    display: "flex",
    alignItems: "flex-start",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - 236px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
    "& .MuiToolbar-root": {
      minHeight: 0,
      height: 64,
      padding: "0 36px",
      display: "flex",
      justifyContent: "space-between",
    },
  })
);
