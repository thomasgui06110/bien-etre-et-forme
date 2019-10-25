import React from "react";

const Select = ({ name, value, onChange, error="", label, children }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select
        onChange={onChange}
        value={value}
        className={"form-control" + (error && " is-invalid")}
        name={name}
        id={name}
      >
        {children}
      </select>
      <p className="invalid-feedback">{error}</p>
    </div>
  );
};

export default Select;
