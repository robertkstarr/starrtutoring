import { Box } from "@mui/material";
import "./App.css";
import Content from "./Content/Content";
import SiteFooter from "./Footer/footer";
import Header from "./Header/header";

function App() {
  return (
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
  );
}

export default App;
