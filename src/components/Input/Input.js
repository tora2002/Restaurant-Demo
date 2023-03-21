import React from "react";
import "./Input.css";

function Input( {placeholder, id, value} ) {
  return (
    <input
      className="custom-input" // add a class name to your custom input
      placeholder={placeholder}
      id={id}
      value={value}
    />
  );
}

export default Input;
