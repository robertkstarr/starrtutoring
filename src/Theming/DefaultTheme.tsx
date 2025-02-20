import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#de1510",
    },
  },
  typography: {
    fontFamily: "PT Serif Display",
    h6: {
      fontWeight: "bold",
      color: "black",
    },
    subtitle1: {
      color: "#3f51b5",
      fontWeight: "bold",
      fontSize: "1rem",
      lineHeight: "1.5rem",
    },
    subtitle2: {
      color: "grey",
      fontStyle: "italic",
    },
  },
});
