import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import classes from "./IssueTableData.module.scss";

const IssueTableData = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.computer_id}</td>
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
      <td>{props.data.solver_name}</td>
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
