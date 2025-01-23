import { Box, Typography } from "@mui/material";

const WorkHistoryComponent = (props: {
  Employer: String;
  JobTitle: String;
  startYear: String;
  endYear: String;
  children?: JSX.Element;
}) => {
  return (
    <Box>
      <Typography variant="h6">
        {props.JobTitle} at {props.Employer}
      </Typography>
      <Box sx={{ ul: { marginTop: "0" } }}>
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

export default WorkHistoryComponent;
