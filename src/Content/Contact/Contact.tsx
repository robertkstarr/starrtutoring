import { Box } from "@mui/material";
import Obfuscate from "react-obfuscate";
import DefaultComponent from "../DefaultComponents/DefaultComponent";

const Contact = () => {
  return (
    <DefaultComponent heading="Contact" sx={{ textAlign: "center" }}>
      <>
        The best way to contact me is via email:
        <Box>
          <Obfuscate email="robert@starrtutoring.com" />
        </Box>
      </>
    </DefaultComponent>
  );
};

export default Contact;
