import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import Obfuscate from "react-obfuscate";
import formulasImage from "../../assets/images/formulas.jpg";
import DefaultComponent, {
  DefaultComponentProps,
} from "../DefaultComponents/DefaultComponent";
import Paragraph from "../DefaultComponents/Paragraph";

export const HOURLY_RATE = "100";
export const EMAIL_ADDRESS = "robert@starrtutoring.com";
export const PHONE_NUMBER = "818-378-4899";

const TLDR = (props: DefaultComponentProps) => {
  const darkMode = props.darkMode;
  const theme = useTheme();

  const Question = (props: { children: String }) => {
    return (
      <Box marginTop={"1rem"}>
        <Typography
          color={(darkMode && theme.palette.secondary.main) || "black"}
          variant={"h6"}
        >
          {props.children}
        </Typography>
      </Box>
    );
  };

  const Answer = (props: React.PropsWithChildren) => {
    return (
      <Box marginTop={".5rem"} marginLeft={"1rem"}>
        {React.createElement(React.Fragment, null, props.children)}
      </Box>
    );
  };

  return (
    <DefaultComponent
      heading={"FAQs"}
      image={formulasImage}
      imageDescription="several mathematical formulas."
      imageRatio={0.8}
      imageOrientation="right"
      {...props}
    >
      <>
        <Question>In what locations do you offer tutoring?</Question>
        <Answer>
          <Paragraph>
            Anywhere within roughly an hour's drive of the Agoura Hills area.
            This includes Agoura Hills, Calabasas, Malibu, Oak Park, Westlake,
            Thousand Oaks, Newbury Park, and the San Fernando Valley.
          </Paragraph>
          <Paragraph>
            I may be able to offer tutoring outside my normal area for an
            additional fee.
          </Paragraph>
        </Answer>
        <Question>How much do you charge?</Question>
        <Answer>
          My current rate is <strong>${HOURLY_RATE} per hour</strong>.
        </Answer>
        <Question>What subjects do you offer?</Question>
        <Answer>
          All levels of high school math including Algebra I and II, Geometry,
          Pre-Calculus, and AP Calculus. I also offer tutoring in AP Physics and
          SAT prep.
        </Answer>
        <Question>How can I get in contact with you?</Question>
        <Answer>
          Either email me at <Obfuscate email={EMAIL_ADDRESS} /> or call/text me
          at <Obfuscate tel={PHONE_NUMBER} />
        </Answer>
      </>
    </DefaultComponent>
  );
};

export default TLDR;
