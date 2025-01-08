import { Box } from "@mui/material";
import React from "react";

const Paragraph = (props: React.PropsWithChildren) => {
  return (
    <Box sx={{ marginY: "1rem" }}>
      {React.createElement(React.Fragment, null, props.children)}
    </Box>
  );
};

export default Paragraph;
