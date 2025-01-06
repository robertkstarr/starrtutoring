import { Divider } from "@mui/material";
import LoremIpsum from "react-lorem-ipsum";
import Obfuscate from "react-obfuscate";
import "./App.css";
import Logo from "./assets/Logo.png";
import SiteFooter from "./Footer/footer";
import Header from "./Header/header";

function App() {
  return (
    <div id="Home">
      <Header />
      <img src={Logo} />
      <div id="Tutoring Services">
        <h2>Tutoring Services</h2>
        <LoremIpsum p={25} />
      </div>
      <Divider variant="middle" />
      <div id="About Me">
        <h2>About Me</h2>
        <LoremIpsum p={25} />
      </div>
      <Divider variant="middle" />
      <div id="Contact">
        <h2>Contact:</h2>
        <h4>
          Email: <Obfuscate email="robert@starrtutoring.com" />
        </h4>
      </div>
      <Divider variant="middle" />
      <LoremIpsum p={25} />
      <SiteFooter />
    </div>
  );
}

export default App;
