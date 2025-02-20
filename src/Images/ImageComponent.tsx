import { Box } from "@mui/material";
import RobertAndMax from "../assets/images/carrying-max.jpg";

const ImageComponent = (props: {
  imgSource?: string;
  maxHeight?: string;
  flexGrow: number;
  alt: string;
}) => {
  return (
    <Box
      width="auto"
      height="auto"
      flex={props.flexGrow}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        component={"img"}
        src={props.imgSource ? props.imgSource : RobertAndMax}
        borderRadius={"5%"}
        width={"auto"}
        height={"auto"}
        maxHeight={props.maxHeight ? props.maxHeight : "90%"}
        maxWidth={"80%"}
        margin={"1rem"}
        alt={props.alt}
      />
    </Box>
  );
};

export default ImageComponent;
