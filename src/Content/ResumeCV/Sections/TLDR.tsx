import { Box } from "@mui/material";
import React from "react";
import DefaultComponent from "../../DefaultComponents/DefaultComponent";

export const HOURLY_RATE = "125";

const TLDR = () => {
  const Question = (props: { children: String }) => {
    return <Box>{props.children}</Box>;
  };

  const Answer = (props: React.PropsWithChildren) => {
    return (
      <Box>{React.createElement(React.Fragment, null, props.children)}</Box>
    );
  };

  return (
    <DefaultComponent heading={"FAQs"}>
      <>
        <Question>What locations do you offer tutoring?</Question>
        <Answer>Anywhere within an hour or so of the Agoura Hills area.</Answer>
        <Question>How much do you charge?</Question>
        <Answer>${HOURLY_RATE} per hour.</Answer>
        <Question>What subjects do you offer?</Question>
        <Answer>
          All levels of high school math including Algebra I and II, Geometry,
          Pre-Calculus, and AP Calculus. I also offer tutoring in AP Physics and
          SAT prep.
        </Answer>
      </>
    </DefaultComponent>
  );
};

export default TLDR;
