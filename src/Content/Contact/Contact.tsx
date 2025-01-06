import Obfuscate from "react-obfuscate";
import DefaultComponent from "../DefaultComponent/DefaultComponent";

const Contact = () => {
  return (
    <DefaultComponent heading="Contact" sx={{ textAlign: "center" }}>
      <h4>
        Email: <Obfuscate email="robert@starrtutoring.com" />
      </h4>
    </DefaultComponent>
  );
};

export default Contact;
