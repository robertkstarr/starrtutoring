import { Box } from "@mui/material";
import DefaultComponent from "../DefaultComponents/DefaultComponent";
import ResumeDivider from "./ResumeDivider";
import AdditionalSkills from "./Sections/AdditionalSkills";
import Education from "./Sections/Education";
import WorkHistory from "./Sections/WorkHistory";

const ResumeCV = () => {
  const RESUME_COMPONENTS = [
    <Education />,
    <WorkHistory />,
    <AdditionalSkills />,
  ];

  return (
    <DefaultComponent heading="Resumé/CV">
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
