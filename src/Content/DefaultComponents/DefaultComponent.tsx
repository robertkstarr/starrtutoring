import { Box, SxProps, Theme, Typography, useTheme } from "@mui/material";
import ImageComponent from "../../Images/ImageComponent";

export interface DefaultComponentProps {
  children?: JSX.Element;
  heading?: string;
  image?: string;
  sx?: SxProps<Theme>;
  imageOrientation?: string;
  imageDescription?: string;
  imageRatio?: number;
  darkMode?: boolean;
}

const DefaultComponent = (props: DefaultComponentProps) => {
  const orientation =
    (props?.imageOrientation == "right" && "row-reverse") || "row";

  const darkMode = props?.darkMode == true;

  const imageRatio = props.imageRatio || 1;

  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "99vw",
        backgroundColor:
          (darkMode && theme.palette.primary.dark) ||
          theme.palette.primary.light,
      }}
      justifyContent={"center"}
      display={"flex"}
    >
      <Box
        sx={{
          width: "80vw",
          marginY: { xs: "1rem", md: "2rem" },
          ...props.sx,
        }}
        justifyContent={"center"}
      >
        <Typography align="center" variant="h3" color="secondary">
          {props.heading}
        </Typography>
        <Box
          display="flex"
          alignItems={"center"}
          maxWidth={"100vw"}
          sx={{ flexDirection: { xs: "column", md: orientation } }}
        >
          {props.image && (
            <ImageComponent
              imgSource={props.image}
              alt={props.imageDescription || ""}
              flexGrow={imageRatio}
            />
          )}
          <Box flex={1}>
            <Typography
              flexGrow={1}
              color={(darkMode && "white") || "black"}
              fontSize={"1.25em"}
            >
              {props.children}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default DefaultComponent;
