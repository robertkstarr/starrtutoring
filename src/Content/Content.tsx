import { Box, Divider } from "@mui/material";
import Obfuscate from "react-obfuscate";
import Logo from "../assets/CapAndGownLogo.png";
import ImageComponent from "../Images/ImageComponent";
import AboutMe from "./About Me/AboutMe";
import Contact from "./Contact/Contact";
import DefaultComponent from "./DefaultComponents/DefaultComponent";
import Paragraph from "./DefaultComponents/Paragraph";
import TLDR, { EMAIL_ADDRESS, PHONE_NUMBER } from "./FAQs/TLDR";
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
      <Box textAlign={"center"} marginTop={"2rem"} id="back-to-top-anchor">
        <ImageComponent
          flexGrow={0}
          alt={"Starr Tutoring Logo — Math, Physics, SAT Prep."}
          imgSource={Logo}
          maxHeight="20vh"
        />
        {/* <img src={Logo} alt="Starr Tutoring Logo — Math, Physics, SAT Prep." /> */}
      </Box>
      <DefaultComponent heading="">
        <>
          <Paragraph>
            One-on-one tutoring in all levels of high school math, physics, and
            SAT Prep by someone with over 15 years teaching and tutoring
            experience. Convenient, in your home, and adapted to your schedule.
          </Paragraph>
          <Paragraph>
            Email me at <Obfuscate email={EMAIL_ADDRESS} /> or call me at{" "}
            <Obfuscate tel={PHONE_NUMBER} /> if you have any questions or would
            like to set up our first session.
          </Paragraph>
        </>
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
