import LoremIpsum from "react-lorem-ipsum";
import Obfuscate from "react-obfuscate";
import "./App.css";
import Logo from "./assets/Logo.png";
import Header from "./Header/header";

function App() {
  return (
    <>
      <Header />
      <img src={Logo} />
      <LoremIpsum p={25} />
      <div>Contact:</div>
      <div>
        <div id="Contact">blah blah blah blah</div>
        <Obfuscate email="robert@starrtutoring.com" />
      </div>
      <LoremIpsum p={25} />
    </>
  );
}

export default App;
