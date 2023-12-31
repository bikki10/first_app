import React, { useState } from "react";
export default function TextForm(props) {
  const [text, setText] = useState(""); // array destructuring syntax
  // text = "new textsbdjs"; // Wrong way of changing the value of text variable
  // setText("new textsbjsb"); // Correct way of changing the value of text variable
  const handleOnChange = (event) => {
    // event is given as a parameter
    // console.log("on change");
    setText(event.target.value); //Event handling syntax in JS
  };
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleDownClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const removeExtraSpaces = () => {
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
    props.showAlert("Extra Spaces Removed!", "success");
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
      <button className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-1 my-2" onClick={handleDownClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-1 my-2" onClick={removeExtraSpaces}>
        Remove Extra Spaces
      </button>

      <div
        className="container my-2"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>Your text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          Estimated time to read the text:{" "}
          {Math.floor(0.0085 * text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length)} minutes.
        </p>
      </div>
    </>
  );
}
