import { Box } from "@mui/material";
import Obfuscate from "react-obfuscate";
import DefaultComponent, {
  DefaultComponentProps,
} from "../DefaultComponents/DefaultComponent";
import { EMAIL_ADDRESS, PHONE_NUMBER } from "../FAQs/TLDR";

const Contact = (props: DefaultComponentProps) => {
  return (
    <DefaultComponent heading="Contact" sx={{ textAlign: "center" }} {...props}>
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
