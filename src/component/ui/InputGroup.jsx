import React from "react";

export const InputGroup = ({ type, name, handleChange, title }) => {
  return (
    <>
      <div>
        <label htmlFor={name}>{title}</label>
        <input id={name} type={type} name={name} onChange={handleChange} />
      </div>
    </>
  );
};
