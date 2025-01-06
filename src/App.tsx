import LoremIpsum from "react-lorem-ipsum";
import Obfuscate from "react-obfuscate";
import "./App.css";
import Logo from "./assets/Logo.png";
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
      <div id="About Me">
        <h2>About Me</h2>
        <LoremIpsum p={25} />
      </div>
      <div id="Contact">
        <h2>Contact:</h2>
        <Obfuscate email="robert@starrtutoring.com" />
      </div>
      <LoremIpsum p={25} />
    </div>
  );
}

export default App;
