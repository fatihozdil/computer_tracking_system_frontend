import React from "react";
import classes from "./Button.module.scss";

const Button = (props) => {
  return (
    <button className={classes.defaultButton} style={props.style}>
      {props.children}
    </button>
  );
};
export default Button;
