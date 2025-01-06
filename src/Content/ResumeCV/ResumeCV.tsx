import LoremIpsum from "react-lorem-ipsum";
import DefaultComponent from "../DefaultComponents/DefaultComponent";

const ResumeCV = () => {
  return (
    <DefaultComponent heading="Resume/CV">
      <>
        <LoremIpsum p={3} />
      </>
    </DefaultComponent>
  );
};

export default ResumeCV;
