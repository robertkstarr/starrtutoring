import LoremIpsum from "react-lorem-ipsum";
import DefaultComponent from "../DefaultComponent/DefaultComponent";

const AboutMe = () => {
  return (
    <DefaultComponent heading="About Me">
      <>
        <LoremIpsum p={25} />
      </>
    </DefaultComponent>
  );
};

export default AboutMe;
