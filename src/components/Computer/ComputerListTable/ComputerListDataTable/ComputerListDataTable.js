import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../UI/Button/Button";
import classes from "./ComputerListDataTable.module.scss";

const ComputerListDataTable = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.computer_name}</td>
      <td>{props.data.opr_sys}</td>
      <td>{props.data.cpu}</td>
      <td>{props.data.ram}</td>
      <td>{props.data.storage}</td>

      <td>
        <Button>
          <Link
            to={`detail/${props.data.id}`}
            state={{
              computer: props.data,
            }}
          >
            detay
          </Link>
        </Button>
      </td>
      <td>
        <button className={`material-icons ${classes.copyIcon}`}>
          content_copy
        </button>
      </td>
    </tr>
  );
};
export default ComputerListDataTable;
