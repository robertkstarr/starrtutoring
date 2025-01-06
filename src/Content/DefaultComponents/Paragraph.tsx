import { Box } from "@mui/material";

const Paragraph = (props: { children: String }) => {
  return <Box sx={{ marginY: "1rem" }}>{props.children}</Box>;
};

export default Paragraph;
