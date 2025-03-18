import { Box } from "@mui/material";
import DefaultComponent from "../DefaultComponents/DefaultComponent";
import { InnerComponentProps } from "../DefaultComponents/InnerComponent";
import Education from "./Sections/Education";
import WorkHistory from "./Sections/WorkHistory";

const ResumeCV = (props: InnerComponentProps) => {
  const RESUME_COMPONENTS = [<Education />, <WorkHistory />];

  return (
    <DefaultComponent
      heading="Resumé/CV"
      sx={{ justifyItems: "center" }}
      {...props}
    >
      <Box
        width={{ md: "60vw" }}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-around",
        }}
      >
        {RESUME_COMPONENTS.map((element, index) => {
          return (
            <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
              {element}
            </Box>
          );
        })}
      </Box>
    </DefaultComponent>
  );
};

export default ResumeCV;
