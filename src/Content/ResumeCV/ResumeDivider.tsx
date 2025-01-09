import { Box, Divider } from "@mui/material";

const ResumeDivider = (props: { width?: string }) => {
  const width = props.width ? props.width : "75%";
  return (
    <Box justifyItems={"center"}>
      <Divider
        variant="middle"
        sx={{
          alignContent: "center",
          width: width,
        }}
      />
    </Box>
  );
};

export default ResumeDivider;
