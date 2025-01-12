import { Box } from "@mui/material";
import Obfuscate from "react-obfuscate";
import DefaultComponent from "../DefaultComponents/DefaultComponent";
import { EMAIL_ADDRESS, PHONE_NUMBER } from "../ResumeCV/Sections/TLDR";

const Contact = () => {
  return (
    <DefaultComponent heading="Contact" sx={{ textAlign: "center" }}>
      <>
        Please call, text, or email me with any questions or to arrange a
        session:
        <Box margin={"1rem"}>
          <strong>Telephone:</strong> <Obfuscate tel={PHONE_NUMBER} />
        </Box>
        <Box margin={"1rem"}>
          <strong>Email:</strong> <Obfuscate email={EMAIL_ADDRESS} />
        </Box>
      </>
    </DefaultComponent>
  );
};

export default Contact;
