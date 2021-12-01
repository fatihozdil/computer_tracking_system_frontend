import React from "react";
import classes from "./UserDataTable.module.scss";

const UserDataTable = (props) => {
  return (
    <tr>
      <td>{props.data.name_surname}</td>
      <td>{props.data.email}</td>
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

export default UserDataTable;
