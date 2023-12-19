import React from "react";

export default function TextForm(props) {
  return (
    <div className="container">
      <div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.textArea}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={4}
            defaultValue={""}
          />
        </div>
      </div>
    </div>
  );
}
