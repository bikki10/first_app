import React from "react";

export default function TextForm(props) {
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={12}
          defaultValue={""}
        />
      </div>
      <button className="btn btn-primary">{props.button}</button>
    </div>
  );
}
