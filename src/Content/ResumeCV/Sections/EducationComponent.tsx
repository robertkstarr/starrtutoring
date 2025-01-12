import { Box, Typography } from "@mui/material";

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
      <Typography variant="h6">
        {props.degree} in {props.major}
      </Typography>
      <Box marginLeft={"1rem"} sx={{ ul: { marginTop: "0" } }}>
        <Typography variant={"subtitle1"}>{props.school}</Typography>
        <Box>
          <Typography variant="subtitle2">
            {props.startYear} - {props.endYear}
          </Typography>
        </Box>
        {props.children}
      </Box>
    </Box>
  );
};

export default EducationComponent;
