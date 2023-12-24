// import logo from "./logo.svg";
import React from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import { useState } from "react";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  const [mode, setMode] = useState("white");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled!", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode has been enabled!", "success");
    }
  };
  return (
    <>
      <Navbar
        title="TextUtils"
        home="Home"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Hey there!" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
