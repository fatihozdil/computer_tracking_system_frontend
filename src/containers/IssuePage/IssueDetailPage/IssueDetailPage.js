import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import * as actions from "../../../store/actions/index";

//components
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
  const [otherIssues, setOtherIssues] = useState();
  const location = useLocation();
  const dispatch = useDispatch();
  const { computer, solverData, issueData } = location.state;
  const { ref, isComponentVisible, handleClick } = UseComponentVisible(false);

  useEffect(() => {
    dispatch(
      actions.readIssuesByComputerId(
        issueData.computer_id,
        issueData.id,
        setOtherIssues
      )
    );
  }, []);

  return (
    <div className={classes.IssueDetailPage}>
      <div className={classes.main}>
        <h1>{computer.computer_name} Numaralı Bilgisayar</h1>

        <DropdownTable title="Bilgisayar Özellikleri">
          <ComputerProperties computer={computer} />
        </DropdownTable>

        <DropdownTable title="Problemi Bildiren Bilgileri">
          <SenderProperties issueData={issueData} />
        </DropdownTable>

        <DropdownTable title="Problemi Çözen Bilgileri">
          <SolverProperties solverData={solverData} issueData={issueData} />
        </DropdownTable>

        {!issueData.solver_id && (
          <SolverMessageInput onClick={() => handleClick(1)} />
        )}

        <h3>Bu Bilgisayara Ait Bildirilmiş Diğer Sorunlar</h3>
      </div>
      {otherIssues ? (
        <IssueTable issues={otherIssues} />
      ) : (
        <p style={{textAlign: 'center'}}>bu bilgisayara ait bildirilen başka sorun bulunmadı</p>
      )}

      {/* warning modal  */}
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
