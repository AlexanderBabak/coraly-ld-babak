import { CSSObject, styled, Theme } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";

const openedMixin = (theme: Theme): CSSObject => ({
  width: 256,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: theme.spacing(9),
});

export const DrawerStyled = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(
  ({ theme, open }): CSSObject => ({
    width: 256,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
    "& .MuiPaper-root": {
      boxSizing: "border-box",
      borderRight: "1px solid rgba(10, 37, 64, 0.32)",
    },
  })
);
