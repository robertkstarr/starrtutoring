import { Box, Divider } from "@mui/material";
import Logo from "../assets/Logo.png";
import AboutMe from "./About Me/AboutMe";
import Contact from "./Contact/Contact";
import DefaultComponent from "./DefaultComponents/DefaultComponent";
import Paragraph from "./DefaultComponents/Paragraph";
import ResumeCV from "./ResumeCV/ResumeCV";
import TLDR from "./ResumeCV/Sections/TLDR";
import TutoringServices from "./TutoringServices/TutoringServices";

export const SECTION_HEADINGS = [
  "FAQs",
  "About Me",
  "Tutoring Services",
  "Resume/CV",
  "Contact",
];
export const SECTIONS = [
  <TLDR />,
  <AboutMe />,
  <TutoringServices />,
  <ResumeCV />,
  <Contact />,
];

const Content = () => {
  return (
    <Box justifyItems={"center"}>
      <Box textAlign={"center"} marginTop={"1rem"}>
        <img src={Logo} alt="Starr Tutoring Logo — Math, Physics, SAT Prep." />
      </Box>
      <DefaultComponent heading="">
        <Paragraph>
          One-on-one tutoring in all levels of high school math, physics, and
          SAT Prep. Convenient, in your home, and adapted to your schedule.
        </Paragraph>
      </DefaultComponent>

      {SECTIONS.map((section, index) => {
        return (
          <Box key={"component" + index}>
            <Divider variant="middle" />
            {section}
          </Box>
        );
      })}
    </Box>
  );
};

export default Content;
