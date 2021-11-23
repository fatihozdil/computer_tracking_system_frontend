import React from "react";
import { Link } from "react-router-dom";
import classes from "./IssueTableData.module.scss";

const IssueTableData = (props) => {
  return (
    <tr>
      <td>{props.data.issue_id}</td>
      <td>{props.data.computer_id}</td>
      <td>{props.data.sender_name}</td>
      <td>{props.data.sender_title}</td>
      <td>{props.data.sender_message}</td>
      <td>{props.data.reported_date}</td>
      <td
        className="material-icons"
        style={{ color: props.data.is_solved ? "green" : "red" }}
      >
        {props.data.is_solved ? "done" : "highlight_off"}
      </td>
      <td>{props.data.solver_name}</td>
      <td>{props.data.solver_message}</td>
      <td>
        <button className={classes.detailButton}>
          <Link to="detail">detay</Link>
        </button>
      </td>
      <td>
        <button className={`material-icons ${classes.deleteIcon}`}>
          delete
        </button>
      </td>
    </tr>
  );
};
export default IssueTableData;
