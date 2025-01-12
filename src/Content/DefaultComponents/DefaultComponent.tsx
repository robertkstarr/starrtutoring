import { Box, SxProps, Theme, Typography } from "@mui/material";
import ImageComponent from "../../Images/ImageComponent";

const DefaultComponent = (props: {
  children: JSX.Element;
  heading?: string;
  image?: string;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Box
      id={props.heading}
      sx={{ width: "80vw", marginY: { xs: "1rem", md: "2rem" }, ...props.sx }}
      justifyContent={"center"}
    >
      <Typography align="center" variant="h4" color="primary">
        {props.heading}
      </Typography>
      <Box
        display="flex"
        alignItems={"center"}
        maxWidth={"100vw"}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        {props.image && <ImageComponent imgSource={props.image} />}
        <Box flex={1}>
          <Typography flexGrow={1}>{props.children}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DefaultComponent;
