import React from "react";
import classes from "./FixturesTable.module.scss";

const FixturesTable = (props) => {
  return (
    <div className={classes.FixturesTable}>
      <table role="table">
        <thead>
          <tr role="row">
            <th role="columnheader">Sıra No</th>
            <th role="columnheader">Fiş No</th>
            <th role="columnheader">Tarih</th>
            <th role="columnheader">Taşınır Kodu/Ürün Kodu</th>
            <th role="columnheader">Markası Model Cins Ek Özellik</th>
            <th role="columnheader">Ölçü Birimi</th>
            <th role="columnheader">Sicil No</th>
            <th role="columnheader">Eski Sicil No</th>
            <th role="columnheader">Seri No</th>
            <th role="columnheader">Ambar</th>
            <th role="columnheader">Miktar</th>
            <th role="columnheader">Birim Fiyat</th>
            <th role="columnheader">Düşüm Tarihi</th>
          </tr>
        </thead>

        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
};
export default FixturesTable;
