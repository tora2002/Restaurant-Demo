import React from "react";
import "./input.css";

function Input(props) {
  return (
    <input
      className="custom-input" // add a class name to your custom input
      placeholder={props.placeholder}
      id={props.id}
      value={props.value}
    />
  );
}

export default Input;
