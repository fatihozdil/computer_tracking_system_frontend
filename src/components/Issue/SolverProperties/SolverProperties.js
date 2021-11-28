import React from "react";
import classes from "./SolverProperties.module.scss";

const SolverProperties = (props) => {
  const titles = ["Çözen Adı", "Çözen Eposta", "Çözen Mesaj", "Çözülme Tarihi"];
  const table = titles.map((el) => (
    <div className={classes.property}>
      <label for={el}>{el}</label>
      <p id={el}>test</p>
    </div>
  ));
  return <div className={classes.SolverProperties}>{table}</div>;
};
export default SolverProperties;
