import { Box } from "@mui/material";
import Obfuscate from "react-obfuscate";
import DefaultComponent from "../DefaultComponents/DefaultComponent";

const Contact = () => {
  return (
    <DefaultComponent heading="Contact" sx={{ textAlign: "center" }}>
      <>
        Please call, text, or email me with any questions or to arrange a
        session:
        <Box margin={"1rem"}>
          Telephone: <Obfuscate tel="818-305-5713" />
        </Box>
        <Box margin={"1rem"}>
          Email: <Obfuscate email="robert@starrtutoring.com" />
        </Box>
      </>
    </DefaultComponent>
  );
};

export default Contact;
