import { Box, ThemeProvider } from "@mui/material";

import "./App.css";
import Content from "./Content/Content";
import SiteFooter from "./Footer/footer";
import Header from "./Header/header";
import { theme } from "./Theming/DefaultTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        alignItems={"center"}
        flexDirection={"column"}
        color={"black"}
        margin={0}
        sx={{
          backgroundColor: theme.palette.primary.light,
          display: "-webkit-flex",
          "webkit-justify-content": "center",
          WebkitAlignItems: "center",
          flexDirection: "column",
        }}
      >
        <Header />
        <Box
          maxWidth={"75rem"}
          flexDirection={"column"}
          sx={{
            display: "-webkit-flex",
            "webkit-justify-content": "center",
            WebkitAlignItems: "center",
            flexDirection: "column",
          }}
        >
          <Content />
        </Box>
        <SiteFooter />
      </Box>
    </ThemeProvider>
  );
}

export default App;
