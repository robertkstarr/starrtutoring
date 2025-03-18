import { Box, Typography } from "@mui/material";
import InnerComponent from "../DefaultComponents/InnerComponent";

const ResumeSection = (props: { heading: String; children?: JSX.Element }) => (
  <InnerComponent>
    <>
      <Typography margin=".5rem" variant="h5" color="primary">
        {props.heading}
      </Typography>
      <Box marginLeft={".5rem"}>{props.children}</Box>
    </>
  </InnerComponent>
);

export default ResumeSection;
