import { useState } from "react";

function LabelText({ children, name, pattern, req }) {
  const [value, setValue] = useState("");

  let changeValue = (event) => {
    let incorrect = false;
    switch (name) {
      case "name":
        incorrect |= event.target.value.match(/[^А-Яа-яA-Za-z ]/);
        incorrect |= event.target.value.includes("  ");
        incorrect |= event.target.value.split(" ").length > 3;
        break;
      case "phone":
        incorrect |= event.target.value.match(/[^0-9+]/);
        break;
      case "e-mail":
        incorrect |= event.target.value.match(/ /);
        break;
      default:
        break;
    }
    if (incorrect) return;
    setValue(event.target.value);
  };

  let checkValue = (event) => {
    event.target.required = true;
  };

  return (
    <div className="label-text">
      <label htmlFor={name}>{children}</label>
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={changeValue}
        onBlur={checkValue}
        pattern={pattern}
        required={req}
      />
    </div>
  );
}

export default LabelText;
