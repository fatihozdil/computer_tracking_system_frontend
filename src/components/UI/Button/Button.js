import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      className={classes.defaultButton}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
};
export default Button;
