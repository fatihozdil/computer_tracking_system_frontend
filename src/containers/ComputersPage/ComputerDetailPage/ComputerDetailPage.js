import React from "react";
import ComputerProperties from "../../../components/Computer/ComputerProperties/ComputerProperties";
import FixturesProperties from "../../../components/Computer/FixturesProperties/FixturesProperties";
import IssueTable from "../../../components/Issue/IssueTable/IssueTable";
import Button from "../../../components/UI/Button/Button";
import DropdownTable from "../../../components/UI/DropdownTable/DropdownTable";
import classes from "./ComputerDetailPage.module.scss";

const ComputerDetailPage = (props) => {
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
          <FixturesProperties />
        </DropdownTable>
        <h3>Bu Bilgisayara Ait Bildirilmiş Diğer Sorunlar</h3>
      </div>
      <IssueTable />
    </div>
  );
};
export default ComputerDetailPage;
