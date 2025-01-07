import { Box } from "@mui/material";

const ResumeSection = (props: { heading: String; children?: JSX.Element }) => {
  return (
    <>
      <h3>{props.heading}</h3>
      <Box marginLeft={"1rem"}>{props.children}</Box>
    </>
  );
};

export default ResumeSection;
