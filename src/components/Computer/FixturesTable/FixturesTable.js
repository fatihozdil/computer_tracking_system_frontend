import React from "react";
import FixturesDataTable from "./FixturesDataTable/FixturesDataTable";
import classes from "./FixturesTable.module.scss";

const FixturesTable = (props) => {
  const data = {
    order_no: "Sıra No",
    receipt_no: "Fiş No",
    date: "Tarih",
    product_code: "Taşınır Kodu/Ürün Kodu",
    brand: "Markası Model Cins Ek Özellik",
    measure_unit: "Ölçü Birimi",
    regist_no: "Sicil No",
    old_regis_no: "Eski Sicil No",
    serial_no: "Seri No",
    warehouse: "Ambar",
    amount: "Miktar",
    unit_price: "Birim Fiyat",
    drop_date: "Düşüm Tarihi",
  };

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

        <tbody>
          <FixturesDataTable data={data} />
          <FixturesDataTable data={data} />
        </tbody>
      </table>
    </div>
  );
};
export default FixturesTable;
