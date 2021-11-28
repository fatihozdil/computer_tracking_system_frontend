import React from "react";
import ComputerProperties from "../../../components/Computer/ComputerProperties/ComputerProperties";
import IssueTable from "../../../components/Issue/IssueTable/IssueTable";
import SenderProperties from "../../../components/Issue/SenderProperties/SenderProperties";
import SolverMessageInput from "../../../components/Issue/SolverMessageInput/SolverMessageInput";
import SolverProperties from "../../../components/Issue/SolverProperties/SolverProperties";
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
          <SenderProperties />
        </DropdownTable>

        <DropdownTable title="Problemi Çözen Bilgileri">
          <SolverProperties />
        </DropdownTable>

        <SolverMessageInput />

        <h3>Bu Bilgisayara Ait Bildirilmiş Diğer Sorunlar</h3>
      </div>
      <IssueTable />
    </div>
  );
};
export default IssueDetailPage;
