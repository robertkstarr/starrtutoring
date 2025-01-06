import Obfuscate from "react-obfuscate";
import "./App.css";
import Logo from "./assets/Logo.png";
import Header from "./Header/header";

function App() {
  return (
    <>
      <Header />
      <img src={Logo} />
      <div>Contact:</div>
      <div>
        <Obfuscate email="robert@starrtutoring.com" />
      </div>
    </>
  );
}

export default App;
