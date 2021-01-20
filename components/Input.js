import React from "react";

function Input({ type, name, id, placeholder, required, value, className }) {
  return type === "textarea" ? (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      className={className}
    />
  ) : (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value && value}
      required={required}
      className={className}
    />
  );
}

export default Input;
