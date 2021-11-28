import React from "react";
import classes from "./ComputerProperties.module.scss";

const ComputerProperties = (props) => {
  const names = [
    "Bilgisayar Numarası",
    "Mac Adresi",
    "İşletim Sistemi",
    "cpu",
    "ram",
    "Anakart",
    "Depolama",
    "Ses",
    "Klavye",
    "Fare",
  ];
  const properties = names.map((el) => (
    <div className={classes.property}>
      <label for={el}>{el}</label>
      <input id={el} name={el} type="text" />
    </div>
  ));
  return <div className={classes.ComputerProperties}>{properties}</div>;
};
export default ComputerProperties;
