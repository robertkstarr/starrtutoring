import { Box, createTheme, ThemeProvider } from "@mui/material";

import "./App.css";
import Content from "./Content/Content";
import SiteFooter from "./Footer/footer";
import Header from "./Header/header";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#ff3833",
      },
      secondary: {
        main: "#ff7445",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box
        id="Home"
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        color={"black"}
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
