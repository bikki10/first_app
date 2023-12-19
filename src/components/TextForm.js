import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here"); // array destructuring syntax
  //   text = "new textsbdjs"; // Wrong way of changing the value of text variable
  //   setText("new textsbjsb"); // Correct way of changing the value of text variable
  const handleOnChange = (event) => {
    // event is given as a parameter
    console.log("on change");
    setText(event.target.value); //Event handling syntax in JS
  };
  const handleUpClick = () => {
    console.log("Text changed to UPPERCASE!");
    let newText = text.toUpperCase();
    setText(newText);
  };
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={12}
          value={text}
          onChange={handleOnChange}
        />
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        {props.button}
      </button>
    </div>
  );
}
