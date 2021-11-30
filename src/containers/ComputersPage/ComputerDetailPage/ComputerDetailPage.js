import React from "react";
import ComputerProperties from "../../../components/Computer/ComputerProperties/ComputerProperties";
import FixturesDataTable from "../../../components/Computer/FixturesTable/FixturesDataTable/FixturesDataTable";
import FixturesTable from "../../../components/Computer/FixturesTable/FixturesTable";
import IssueTable from "../../../components/Issue/IssueTable/IssueTable";
import Button from "../../../components/UI/Button/Button";
import DropdownTable from "../../../components/UI/DropdownTable/DropdownTable";
import classes from "./ComputerDetailPage.module.scss";

const ComputerDetailPage = (props) => {
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
    <div className={classes.ComputerDetailPage}>
      <div className={classes.main}>
        <div className={classes.title}>
          <h1>5 Numaralı Bilgisayar</h1>
          <Button>Değişiklikleri Kaydet</Button>
        </div>
        <DropdownTable title="Bilgisayar Özellikleri">
          <ComputerProperties />
        </DropdownTable>
        <DropdownTable title="Demirbaşlar">
          <FixturesTable>
            <FixturesDataTable data={data} />
          </FixturesTable>
        </DropdownTable>
        <h3>Bu Bilgisayara Ait Bildirilmiş Diğer Sorunlar</h3>
      </div>
      <IssueTable />
    </div>
  );
};
export default ComputerDetailPage;
