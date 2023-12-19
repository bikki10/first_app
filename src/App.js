// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" home="Home" />
      <TextForm textArea="Enter your text here" />
    </>
  );
}

export default App;
