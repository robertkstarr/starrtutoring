import { Box, Typography } from "@mui/material";
import React from "react";
import Obfuscate from "react-obfuscate";
import formulasImage from "../../../assets/images/formulas.jpg";
import DefaultComponent from "../../DefaultComponents/DefaultComponent";

export const HOURLY_RATE = "100";
export const EMAIL_ADDRESS = "robert@starrtutoring.com";
export const PHONE_NUMBER = "818-378-4899";

const TLDR = () => {
  const Question = (props: { children: String }) => {
    return (
      <Box marginTop={"1rem"}>
        <Typography color={"secondary"} variant={"h5"}>
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
      imageDescription="several mathetmatical formulas."
    >
      <>
        <Question>In what locations do you offer tutoring?</Question>
        <Answer>
          Anywhere within roughly an hour's drive of the Agoura Hills area. This
          includes Agoura Hills, Calabasas, Oak Park, Westlake, Thousand Oaks,
          Newbury Park, and the San Fernando Valley.
        </Answer>
        <Question>How much do you charge?</Question>
        <Answer>My current rate is ${HOURLY_RATE} per hour.</Answer>
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
