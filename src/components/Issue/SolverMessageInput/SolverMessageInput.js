import React, { useState } from "react";
import Button from "../../UI/Button/Button";
import classes from "./SolverMessageInput.module.scss";

const SolverMessageInput = (props) => {
  const [message, setMessage] = useState();
  const changeHandler = (e) => {
    setMessage(e.target.value);
  };
  return (
    <div className={classes.MessageInput}>
      <textarea
        value={message}
        onChange={changeHandler}
        placeholder="Mesajınızı Buraya Yazınız"
      />
      <Button onClick={props.onClick}>Kaydet</Button>
    </div>
  );
};
export default SolverMessageInput;
