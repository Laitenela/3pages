import { useState } from "react";

function LabelText({ children, name, pattern, req, type }) {
  const [value, setValue] = useState("");

  return (
    <div className="label-text">
      <label htmlFor={name}>{children}</label>
      <input
        id       = {name}
        name     = {name}
        type     = {type || "text"}
        value    = {value}
        onChange = {changeValue(name, setValue)}
        onBlur   = {checkValue}
        pattern  = {pattern}
        required = {req}
      />
    </div>
  );
}

export default LabelText;

function changeValue(name, cb) {
  return (event) => {
    let incorrect = false;
    switch (name) {
      case "name":
        incorrect |= event.target.value.match(/[^А-Яа-яA-Za-z ]/);
        incorrect |= event.target.value.includes("  ");
        incorrect |= event.target.value.split(" ").length > 3;
        break;
      case "e-mail":
        incorrect |= event.target.value.match(/ /);
        break;
      default:
        break;
    }
    if (incorrect) return;
    cb(event.target.value);
  };
}

let checkValue = (event) => {
  event.target.required = true;
};
