import { Box } from "@mui/material";

const EducationComponent = (props: {
  degree: String;
  school: String;
  startYear: String;
  endYear: String;
  major: String;
  children?: JSX.Element;
}) => {
  return (
    <Box>
      <h4>
        {props.degree} in {props.major}
      </h4>
      <Box marginLeft={"1rem"}>
        <Box>{props.school}</Box>
        <Box>
          {props.startYear} - {props.endYear}
        </Box>
        {props.children}
      </Box>
    </Box>
  );
};

export default EducationComponent;
