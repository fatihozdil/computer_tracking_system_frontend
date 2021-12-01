import React from "react";
import Button from "../../Button/Button";
import classes from "./GeneralModal.module.scss";

const GeneralModal = React.forwardRef((props, ref) => {
  let GeneralModal = classes.GeneralModal;
  if (props.isVisible === 1) {
    GeneralModal = `${classes.GeneralModal} ${classes.GeneralModal_open}`;
  }
  return (
    <div ref={ref} className={GeneralModal}>
      <div className={classes.title}>
        <h4>UYARI!</h4>
      </div>
      <dıv className={classes.message}>
        <p>{props.children}</p>
      </dıv>
      <div className={classes.actions}>
        <Button onClick={props.onClick} style={{ backgroundColor: "red" }}>
          iptal et
        </Button>
        <Button>Devam et</Button>
      </div>
    </div>
  );
});
export default GeneralModal;
