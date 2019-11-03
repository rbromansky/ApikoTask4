import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import { useLocation } from "react-router";

export const Button = props => {
  const path = useLocation().pathname;

  return (
    <div className="MenuItem">
      <button className="button-input">
        {props.rout === path ? (
          <div>{props.children}</div>
        ) : (
          <Link to={props.rout}>{props.children}</Link>
        )}
      </button>
    </div>
  );
};
