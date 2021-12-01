import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./SolverMessageInput.module.scss";

const SolverMessageInput = (props) => {
  return (
    <div className={classes.MessageInput}>
      <textarea placeholder="Mesajınızı Buraya Yazınız" />
      <Button onClick={props.onClick}>Kaydet</Button>
    </div>
  );
};
export default SolverMessageInput;
