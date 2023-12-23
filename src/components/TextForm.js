import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState(""); // array destructuring syntax
  //   text = "new textsbdjs"; // Wrong way of changing the value of text variable
  //   setText("new textsbjsb"); // Correct way of changing the value of text variable
  const handleOnChange = (event) => {
    // event is given as a parameter
    console.log("on change");
    setText(event.target.value); //Event handling syntax in JS
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={8}
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === "dark" ? "#042743" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        />
      </div>
      <button
        className="btn btn-primary mx-3 my-2"
        onClick={handleUpClick}
        
      >
        Convert to Uppercase
      </button>
      <button
        className="btn btn-primary my-2"
        onClick={handleDownClick}
      >
        Convert to Lowercase
      </button>
      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          Estimated time to read the text:{" "}
          {Math.floor(0.0085 * text.split(" ").length)} minutes.
        </p>
      </div>
    </>
  );
}
