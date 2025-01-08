import { Box, SxProps, Theme, Typography } from "@mui/material";

const DefaultComponent = (props: {
  children: JSX.Element;
  heading?: string;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Box id={props.heading} sx={{ margin: "2rem", ...props.sx }}>
      <Typography align="center" variant="h4" color="primary">
        {props.heading}
      </Typography>
      <Typography>{props.children}</Typography>
    </Box>
  );
};

export default DefaultComponent;
