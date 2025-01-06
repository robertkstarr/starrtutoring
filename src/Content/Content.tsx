import { Box, Divider } from "@mui/material";
import Logo from "../assets/Logo.png";
import AboutMe from "./About Me/AboutMe";
import Contact from "./Contact/Contact";
import ResumeCV from "./ResumeCV/ResumeCV";
import TutoringServices from "./TutoringServices/TutoringServices";

export const SECTION_HEADINGS = [
  "About Me",
  "Tutoring Services",
  "Resume/CV",
  "Contact",
];
export const SECTIONS = [
  <AboutMe />,
  <TutoringServices />,
  <ResumeCV />,
  <Contact />,
];

const Content = () => {
  return (
    <>
      <Box textAlign={"center"} marginTop={"1rem"}>
        <img src={Logo} alt="Starr Tutoring Logo — Math, Physics, SAT Prep." />
      </Box>
      {SECTIONS.map((section, index) => {
        return (
          <Box key={"component" + index}>
            {section}
            {index != SECTIONS.length - 1 && <Divider variant="middle" />}
          </Box>
        );
      })}
    </>
  );
};

export default Content;
