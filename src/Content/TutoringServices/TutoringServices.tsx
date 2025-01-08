import DefaultComponent from "../DefaultComponents/DefaultComponent";
import Paragraph from "../DefaultComponents/Paragraph";
import { HOURLY_RATE } from "../ResumeCV/Sections/TLDR";

const TutoringServices = () => {
  return (
    <DefaultComponent heading="Tutoring Services">
      <>
        <Paragraph>
          As a private tutor, I'm available to help in all levels of high school
          math and physics including AP Physics and AP Calculus. I also provide
          services in math standardized tests, including the SAT, and can work
          with you on test-taking skills to drastically improve your score.
        </Paragraph>
        <Paragraph>
          Generally speaking, I travel to you. That's typically in your home,
          though I'm flexible — many students prefer to meet in a library or
          coffee shop and that's also acceptible.
        </Paragraph>
        <Paragraph>
          I'm based out of the Agoura Hills area and generally service anywhere
          within an hour or so of there.
        </Paragraph>
        <Paragraph>
          I've also tutored via teleconferencing and while it'll work in a
          pinch, I've found that it's not ideal.
        </Paragraph>
        <Paragraph>
          My current rate is ${HOURLY_RATE} per hour, though please reach out
          and ask about my sliding scale if that's prohibitively expensive.
        </Paragraph>
      </>
    </DefaultComponent>
  );
};

export default TutoringServices;
