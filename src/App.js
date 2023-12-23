// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { useState } from "react";
// import TextForm from "./components/TextForm";

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  const [mode, setMode] = useState("dark");

  const toggleMode = () => {
    if (mode === "Light") {
      setMode("Dark");
    } else {
      setMode("Light");
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
        {/* <TextForm heading="Hey there!" /> */}
        <About />
      </div>
    </>
  );
}

export default App;
