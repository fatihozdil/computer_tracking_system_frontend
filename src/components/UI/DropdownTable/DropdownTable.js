import React from "react";
import UseComponentVisible from "../../../helpers/Dropdown";
import classes from "./DropdownTable.module.scss";

const DropdownTable = (props) => {
  const { ref, isComponentVisible, handleClick } = UseComponentVisible(false);
  let data = classes.data;
  if (isComponentVisible === 1) data = `${classes.data} ${classes.data_open}`;

  return (
    <div className={classes.property}>
      <div className={classes.title} onClick={() => handleClick(1)}>
        <h4>{props.title}</h4>
        <span className="material-icons">keyboard_arrow_down</span>
      </div>
      <div ref={ref} className={data}>
        {props.children}
      </div>
    </div>
  );
};

export default DropdownTable;
