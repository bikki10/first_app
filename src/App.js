// import logo from "./logo.svg";
import React from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import { useState } from "react";
import TextForm from "./components/TextForm";

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  const [mode, setMode] = useState("white");

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
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
      <div className="container my-3">
        <TextForm heading="Hey there!" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
