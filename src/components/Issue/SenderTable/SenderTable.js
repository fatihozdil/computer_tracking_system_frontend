import React from "react";
import classes from "./SenderTable.module.scss";

const SenderTable = (props) => {
  const titles = [
    "Gönderen Adı",
    "Gönderen Ünvanı",
    "Gönderen Mesaj",
    "Gönderen Eposta",
    "Bildirilme Tarihi",
  ];
  const table = titles.map((el) => (
    <div className={classes.property}>
      <label for={el}>{el}</label>
      <p id={el}>test</p>
    </div>
  ));
  return <div className={classes.SenderTable}>{table}</div>;
};
export default SenderTable;
