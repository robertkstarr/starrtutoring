import calculator from "../../assets/images/carrying-calculator.jpg";
import DefaultComponent from "../DefaultComponents/DefaultComponent";
import Paragraph from "../DefaultComponents/Paragraph";
import { HOURLY_RATE } from "../FAQs/TLDR";

const TutoringServices = () => {
  return (
    <DefaultComponent
      heading="Tutoring Services"
      image={calculator}
      imageRatio={0.25}
      imageDescription="A man carrying a large calculator on his back."
    >
      <>
        <Paragraph>
          As a private tutor, I'm available to help in all levels of high school
          math and physics as well as test prep. This includes:
          <ul>
            <li>Algebra I</li>
            <li>Geometry</li>
            <li>Algebra II</li>
            <li>Pre-Calculus/Math Analysis</li>
            <li>AP Calculus</li>
            <li>AP Physics</li>
            <li>SAT Test Prep</li>
            <li>Essay Writing</li>
          </ul>
        </Paragraph>
        <Paragraph>
          Please ask if you need help in a subject not listed here. With over 15
          years of teaching and tutoring experience, I may still be able to
          assist.
        </Paragraph>
        <Paragraph>
          Generally speaking, I travel to you. That's typically in your home,
          though I'm flexible — many students prefer to meet in a library or
          coffee shop and that's also acceptable.
        </Paragraph>
        <Paragraph>
          I'm based out of the Agoura Hills area and generally service anywhere
          within an hour or so of there.
        </Paragraph>
        <Paragraph>
          I've also tutored via teleconferencing (Zoom, Google Meet, Teams,
          etc.) and while it'll work in a pinch, I've found that it's not ideal.
        </Paragraph>
        <Paragraph>
          My current rate is ${HOURLY_RATE} per hour, though please ask about my
          sliding scale if that's prohibitively expensive.
        </Paragraph>
      </>
    </DefaultComponent>
  );
};

export default TutoringServices;
