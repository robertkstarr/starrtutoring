import { Box } from "@mui/material";
import Obfuscate from "react-obfuscate";
import DefaultComponent from "../DefaultComponents/DefaultComponent";

const Contact = () => {
  return (
    <DefaultComponent heading="Contact" sx={{ textAlign: "center" }}>
      <>
        Please email me with any questions or to arrange a session:
        <Box margin={"1rem"}>
          <Obfuscate email="robert@starrtutoring.com" />
        </Box>
      </>
    </DefaultComponent>
  );
};

export default Contact;
