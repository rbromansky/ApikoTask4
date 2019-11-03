import React, { useState } from "react";
import T from "prop-types";

export const RaviewInput = ({ onAdd }) => {
  const [value, setInputValue] = useState("");

  const onChange = event => setInputValue(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    if (value === "") return;
    onAdd(value);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input {...{ value }} onChange={onChange} />
    </form>
  );
};

RaviewInput.protoTypes = {
  onAdd: T.func.isRequired
};
