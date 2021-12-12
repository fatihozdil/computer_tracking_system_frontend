import React, { useState } from "react";
import classes from "./SolverProperties.module.scss";

const SolverProperties = ({ solverData, issueData }) => {
  const titles = ["Çözen Adı", "Çözen Eposta", "Çözen Mesaj", "Çözülme Tarihi"];

  if (solverData) {
    var data = {
      name: solverData.name,
      email: solverData.email,
      solver_message: issueData.solver_message,
      solved_date: issueData.solved_date,
    };
  }
  const table = Object.keys(solverData ? data : titles).map((el, i) => {
    return (
      <div className={classes.property}>
        <label htmlFor={el}>{titles[i]}</label>
        <p id={el}>{solverData ? data[el] : "çözülmedi"}</p>
      </div>
    );
  });
  return <div className={classes.SolverProperties}>{table}</div>;
};
export default SolverProperties;
