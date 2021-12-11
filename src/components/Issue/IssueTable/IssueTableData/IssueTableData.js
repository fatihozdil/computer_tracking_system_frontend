import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../../../store/actions/index";
//components
import Button from "../../../UI/Button/Button";
import classes from "./IssueTableData.module.scss";

const IssueTableData = (props) => {
  const { solver_id } = props.data;
  
  const [computerData, setComputerData] = useState();
  const [solverData, setSolverData] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.readComputerById(props.data.computer_id, setComputerData));
    if (solver_id !== null) {
      dispatch(actions.getUserById(solver_id, setSolverData));
    }
  }, [dispatch]);
  console.log(solverData)
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
      <td>{solverData ? solverData.name : '' }</td>
      <td>{props.data.solver_message}</td>
      <td>
        <Button>
          <Link to="detail">detay</Link>
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
