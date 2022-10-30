import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#F93E6C",
      dark: "#C73256",
      light: "#E03861",
      contrastText: "#fff",
    },
    secondary: {
      main: "#2CCFBC",
      light: "#28BAA9",
      dark: "#23A696",
      contrastText: "#fff",
    },
    info: {
      main: "#04385A",
      light: "#464356",
      dark: "#312E43",
      contrastText: "#fff",
    },
    success: {
      main: "#34D182",
      contrastText: "#fff",
    },
    error: {
      main: "#FF4339",
    },
    warning: {
      main: "#EF980B",
    },
    text: {
      primary: "#464356",
      secondary: "#6F6D7B",
    },
    grey: {
      100: "#EAEAEC",
      200: "#D6D5D9",
      300: "#6c7c8c",
      400: "#e5e5e5",
      500: "#f7f7f7",
      600: "#666666",
    },
  },
  typography: {
    fontFamily: '"Inter", "sans-serif"',
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});
