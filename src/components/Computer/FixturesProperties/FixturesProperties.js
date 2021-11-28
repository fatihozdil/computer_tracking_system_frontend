import React from "react";
import classes from "./FixturesProperties.module.scss";

const FixturesProperties = (props) => {
  const names = [
    "Sıra No",
    "Fiş No",
    "Tarih",
    "Taşınır Kodu/Ürün Kodu",
    "Markası Model Cins Ek Özellik",
    "Ölçü Birimi",
    "Sicil No",
    "Eski Sicil No",
    "Seri No",
    "Ambar",
    "Miktar",
    "Birim Fiyat",
    "Düşüm Tarihi",
  ];
  const properties = names.map((el) => (
    <div className={classes.property}>
      <label for={el}>{el}</label>
      <input id={el} name={el} type="text" />
    </div>
  ));
  return <div className={classes.FixturesProperties}>{properties}</div>;
};
export default FixturesProperties;
