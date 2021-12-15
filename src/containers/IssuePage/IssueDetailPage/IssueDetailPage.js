import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [message, setMessage] = useState(false);
  const [otherIssues, setOtherIssues] = useState();
  const [deleteStatus, setDeletestatus] = useState(false);
  const [orderData, setOrderData] = useState();

  const [updateData, setUpdateData] = useState({
    id: null,
    solver_message: null,
  });
  const [updateComputerData, setUpdateComputerData] = useState();
  const location = useLocation();
  const dispatch = useDispatch();
  const { computer, solverData, issueData } = location.state;
  const { ref, isComponentVisible, handleClick } = UseComponentVisible(false);

  useEffect(() => {
    dispatch(
      actions.readIssuesByComputerId(
        issueData.computer_id,
        issueData.id,
        setOtherIssues,
        orderData
      )
    );
  }, [location.pathname, orderData, deleteStatus]);

  const updateIssueHandler = (state) => {
    setUpdateData({
      ...updateData,
      solver_message: state,
      id: issueData.id,
    });

  };
  const updateIssueRequestHandler = () => {
    dispatch(actions.updateIssue(updateData));
    dispatch(actions.updateComputerById(updateComputerData));
  }
  return (
    <div className={classes.IssueDetailPage}>
      {message && (
        <div className={classes.message}>
          <p>Değişikler kaydedildi</p>
        </div>
      )}
      <div className={classes.main}>
        <h1>{computer.computer_name} Numaralı Bilgisayar</h1>

        <DropdownTable title="Bilgisayar Özellikleri">
          <ComputerProperties
            computer={computer}
            setUpdateComputerData={setUpdateComputerData}
          />
        </DropdownTable>

        <DropdownTable title="Problemi Bildiren Bilgileri">
          <SenderProperties issueData={issueData} />
        </DropdownTable>

        <DropdownTable title="Problemi Çözen Bilgileri">
          <SolverProperties solverData={solverData} issueData={issueData} />
        </DropdownTable>

        {!issueData.solver_id && (
          <SolverMessageInput
            onClick={handleClick}
            updateHandler={updateIssueHandler}
          />
        )}

        <h3>Bu Bilgisayara Ait Bildirilmiş Diğer Sorunlar</h3>
      </div>
      {otherIssues ? (
        <IssueTable
          issues={otherIssues}
          setOrderData={setOrderData}
          setDeletestatus={setDeletestatus}
        />
      ) : (
        <p style={{ textAlign: "center" }}>
          bu bilgisayara ait bildirilen başka sorun bulunmadı
        </p>
      )}

      {/* warning modal  */}
      <GeneralModal
        onClick={() => handleClick(false)}
        ref={ref}
        continueAction={() => {
          updateIssueRequestHandler();
          setMessage(true);
          setTimeout(() => {
            navigate("/issue");
          }, 1000);
          props.setUpdateStatus((state) => !state);
          handleClick(false);
        }}
        isVisible={isComponentVisible}
      >
        Bu problemi güncellemek istediğinize emin misiniz?
      </GeneralModal>
    </div>
  );
};
export default IssueDetailPage;
