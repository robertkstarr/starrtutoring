import { Box, Divider } from "@mui/material";
import Logo from "../assets/Logo.png";
import AboutMe from "./About Me/AboutMe";
import Contact from "./Contact/Contact";
import TutoringServices from "./TutoringServices/TutoringServices";

const Content = () => {
  return (
    <>
      <Box textAlign={"center"} marginTop={"1rem"}>
        <img src={Logo} alt="Starr Tutoring Logo — Math, Physics, SAT Prep." />
      </Box>
      <TutoringServices />
      <AboutMe />
      <Divider variant="middle" />
      <Contact />
    </>
  );
};

export default Content;
