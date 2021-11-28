import React from "react";
import ComputerProperties from "../../../components/Computer/ComputerProperties/ComputerProperties";
import IssueTable from "../../../components/Issue/IssueTable/IssueTable";
import SenderTable from "../../../components/Issue/SenderTable/SenderTable";
import SolverMessageInput from "../../../components/Issue/SolverMessageInput/SolverMessageInput";
import SolverTable from "../../../components/Issue/SolverTable/SolverTable";
import DropdownTable from "../../../components/UI/DropdownTable/DropdownTable";
import classes from "./IssueDetailPage.module.scss";

const IssueDetailPage = (props) => {
  return (
    <div className={classes.IssueDetailPage}>
      <div className={classes.main}>
        <h1>5 Numaralı Bilgisayar</h1>

        <DropdownTable title="Bilgisayar Özellikleri">
          <ComputerProperties />
        </DropdownTable>

        <DropdownTable title="Problemi Bildiren Bilgileri">
          <SenderTable />
        </DropdownTable>

        <DropdownTable title="Problemi Çözen Bilgileri">
          <SolverTable />
        </DropdownTable>

        <SolverMessageInput />

        <h3>Bu Bilgisayara Ait Bildirilmiş Diğer Sorunlar</h3>
      </div>
      <IssueTable />
    </div>
  );
};
export default IssueDetailPage;
