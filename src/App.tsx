import Obfuscate from "react-obfuscate";
import "./App.css";
import Logo from "./assets/Logo.png";

function App() {
  return (
    <>
      <img src={Logo} />
      <div>Contact:</div>
      <div>
        <Obfuscate email="robert@starrtutoring.com" />
      </div>
    </>
  );
}

export default App;
