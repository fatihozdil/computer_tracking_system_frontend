import React from "react";
import classes from "./IssueTable.module.scss";

const IssueTable = (props) => {
  return (
    <tr>
      <td>{props.data.issue_id}</td>
      <td>{props.data.computer_id}</td>
      <td>{props.data.sender_name}</td>
      <td>{props.data.sender_title}</td>
      <td>{props.data.sender_message}</td>
      <td>{props.data.reported_date}</td>
      <td>{props.data.is_solved}</td>
      <td>{props.data.solver_name}</td>
      <td>{props.data.solver_message}</td>
      <td>
        <button>detay</button>
      </td>
      <td>
        <button className={`material-icons ${classes.deleteIcon}`}>
          delete
        </button>
      </td>
    </tr>
  );
};
export default IssueTable;
