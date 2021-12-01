import React from "react";
import ComputerProperties from "../../../components/Computer/ComputerProperties/ComputerProperties";
import IssueTable from "../../../components/Issue/IssueTable/IssueTable";
import SenderProperties from "../../../components/Issue/SenderProperties/SenderProperties";
import SolverMessageInput from "../../../components/Issue/SolverMessageInput/SolverMessageInput";
import SolverProperties from "../../../components/Issue/SolverProperties/SolverProperties";
import DropdownTable from "../../../components/UI/DropdownTable/DropdownTable";
import GeneralModal from "../../../components/UI/Modals/GeneralModal/GeneralModal";
import UseComponentVisible from "../../../helpers/Dropdown";
import classes from "./IssueDetailPage.module.scss";

const IssueDetailPage = (props) => {
  const { ref, isComponentVisible, handleClick } = UseComponentVisible(false);
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

        <SolverMessageInput onClick={() => handleClick(1)} />

        <h3>Bu Bilgisayara Ait Bildirilmiş Diğer Sorunlar</h3>
      </div>
      <IssueTable />
      <GeneralModal
        onClick={() => handleClick(false)}
        ref={ref}
        isVisible={isComponentVisible}
      >
        Bu problemi güncellemek istediğinize emin misiniz?
      </GeneralModal>
    </div>
  );
};
export default IssueDetailPage;
