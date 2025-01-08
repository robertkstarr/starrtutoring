import { Box } from "@mui/material";
import DefaultComponent from "../DefaultComponents/DefaultComponent";
import ResumeDivider from "./ResumeDivider";
import AdditionalSkills from "./Sections/AdditionalSkills";
import Education from "./Sections/Education";
import RelevantExperience from "./Sections/RelevantExperience";

const ResumeCV = () => {
  const RESUME_COMPONENTS = [
    <Education />,
    <RelevantExperience />,
    <AdditionalSkills />,
  ];

  return (
    <DefaultComponent heading="Resume/CV">
      <>
        {RESUME_COMPONENTS.map((element, index) => {
          return (
            <Box key={index}>
              {element}
              {index != RESUME_COMPONENTS.length - 1 && <ResumeDivider />}
            </Box>
          );
        })}
      </>
    </DefaultComponent>
  );
};

export default ResumeCV;
