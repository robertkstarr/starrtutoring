import { Box, SxProps, Theme } from "@mui/material";

const DefaultComponent = (props: {
  children: JSX.Element;
  heading?: string;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Box id={props.heading} sx={{ margin: "2rem", ...props.sx }}>
      <h2>{props.heading}</h2>
      {props.children}
    </Box>
  );
};

export default DefaultComponent;
