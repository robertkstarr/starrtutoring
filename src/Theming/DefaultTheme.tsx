import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#c35b26",
      light: "#FFF1E2",
      dark: "#102E3C",
    },
    secondary: {
      main: "#268EC3",
    },
  },
  typography: {
    fontFamily: "PT Serif Display",
    h6: {
      fontWeight: "bold",
      color: "black",
    },
    subtitle1: {
      color: "#6C5D55",
      fontWeight: "bold",
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    subtitle2: {
      color: "#405E6D",
      fontStyle: "italic",
    },
  },
});
