import { Box, Divider } from "@mui/material";
import Logo from "../assets/Logo2.png";
import AboutMe from "./About Me/AboutMe";
import Contact from "./Contact/Contact";
import DefaultComponent from "./DefaultComponents/DefaultComponent";
import Paragraph from "./DefaultComponents/Paragraph";
import TLDR from "./FAQs/TLDR";
import ResumeCV from "./ResumeCV/ResumeCV";
import TutoringServices from "./TutoringServices/TutoringServices";

export const SECTION_HEADINGS = [
  "About Me",
  "Tutoring Services",
  "Resume/CV",
  "Contact",
  "FAQs",
];
export const SECTIONS = [
  { Heading: "Tutoring Services", Component: <TutoringServices /> },
  { Heading: "About Me", Component: <AboutMe /> },
  { Heading: "Resumé/CV", Component: <ResumeCV /> },
  { Heading: "FAQs", Component: <TLDR /> },
  { Heading: "Contact", Component: <Contact /> },
];

const Content = () => {
  return (
    <Box justifyItems={"center"}>
      <Box textAlign={"center"} marginTop={"1rem"} id="back-to-top-anchor">
        <img src={Logo} alt="Starr Tutoring Logo — Math, Physics, SAT Prep." />
      </Box>
      <DefaultComponent heading="">
        <Paragraph>
          One-on-one tutoring in all levels of high school math, physics, and
          SAT Prep by someone with over 15 years teaching and tutoring
          experience. Convenient, in your home, and adapted to your schedule.
        </Paragraph>
      </DefaultComponent>

      {SECTIONS.map((section, index) => {
        return (
          <Box key={"component" + index} id={section.Heading}>
            <Divider variant="middle" />
            {section.Component}
          </Box>
        );
      })}
    </Box>
  );
};

export default Content;
