import React from "react";
import classes from "./SolverTable.module.scss";

const SolverTable = (props) => {
  const titles = ["Çözen Adı", "Çözen Eposta", "Çözen Mesaj", "Çözülme Tarihi"];
  const table = titles.map((el) => (
    <div className={classes.property}>
      <label for={el}>{el}</label>
      <p id={el}>test</p>
    </div>
  ));
  return <div className={classes.SolverTable}>{table}</div>;
};
export default SolverTable;
