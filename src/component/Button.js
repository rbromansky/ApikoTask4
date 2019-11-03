import React from "react";
import "../styles.css";

export const Button = props => {
  const onClickButton = event => {
    props.onClick();
  };

  return (
    <button onClick={onClickButton} className="button-input">
      <div>{props.children}</div>
    </button>
  );
};
