import { Box, createTheme, ThemeProvider } from "@mui/material";

import "./App.css";
import Content from "./Content/Content";
import SiteFooter from "./Footer/footer";
import Header from "./Header/header";

function App() {
  const theme = createTheme({
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
        color: "primary",
        fontWeight: "bold",
        fontSize: "1.25rem",
        lineHeight: "2rem",
      },
      subtitle2: {
        color: "grey",
        fontStyle: "italic",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        color={"black"}
        margin={0}
      >
        <Header />
        <Box maxWidth={"75rem"}>
          <Content />
        </Box>
        <SiteFooter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
