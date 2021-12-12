import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link , useLocation} from "react-router-dom";
import * as actions from "../../../../store/actions/index";
//components
import Button from "../../../UI/Button/Button";
import classes from "./IssueTableData.module.scss";

const IssueTableData = (props) => {
  const { solver_id, computer_id } = props.data;
  let {pathname} = useLocation();
  const [computerData, setComputerData] = useState();
  const [solverData, setSolverData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (computer_id) {
      dispatch(actions.readComputerById(computer_id, setComputerData));
    }
    if (solver_id !== null) {
      dispatch(actions.getUserById(solver_id, setSolverData));
    }
  }, []);
  const pathname1 = `/issue/detail/${props.data.id}`;
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{computerData && computerData.computer_name}</td>
      <td>{props.data.sender_name}</td>
      <td>{props.data.sender_title}</td>
      <td>{props.data.sender_message}</td>
      <td>{props.data.reported_date}</td>
      <td>
        <span
          className="material-icons"
          style={{ color: props.data.isSolved === "1" ? "green" : "red" }}
        >
          {props.data.isSolved === "1" ? "done" : "highlight_off"}
        </span>
      </td>
      <td>{solverData ? solverData.name : ""}</td>
      <td>{props.data.solver_message}</td>
      <td>
        <Button>
          <Link
            to={pathname1}
            state={{
              computer: computerData,
              solverData: solverData,
              issueData: props.data
            }}
          >
            detay
          </Link>
        </Button>
      </td>
      <td>
        <button
          onClick={props.onClick}
          className={`material-icons ${classes.deleteIcon}`}
        >
          delete
        </button>
      </td>
    </tr>
  );
};
export default IssueTableData;
