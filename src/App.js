// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" home="Home" />
      <div className="container my-3">
        <TextForm heading="Hey there!" button="Convert to UpperCase" />
      </div>
    </>
  );
}

export default App;
