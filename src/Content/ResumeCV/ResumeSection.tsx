import { Box, Typography } from "@mui/material";

const ResumeSection = (props: { heading: String; children?: JSX.Element }) => {
  return (
    <>
      <Typography margin=".5rem" variant="h5" color="primary">
        {props.heading}
      </Typography>
      <Box marginLeft={"1rem"}>{props.children}</Box>
    </>
  );
};

export default ResumeSection;
