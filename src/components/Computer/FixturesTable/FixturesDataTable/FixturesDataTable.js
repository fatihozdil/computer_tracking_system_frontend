import React from "react";
import classes from "./FixturesDataTable.module.scss";

const FixturesDataTable = (props) => {
  console.log(props.data)
  return (
    <tr>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="row_no"
          value={props.data ? props.data.row_no : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="receipt_no"
          value={props.data ? props.data.receipt_no : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="date"
          value={props.data ? props.data.date : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="transport_product_code"
          value={props.data ? props.data.transport_product_code : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="brand_type"
          value={props.data ? props.data.brand_type : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="measure_unit"
          value={props.data ? props.data.measure_unit : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="registr_no"
          value={props.data ? props.data.registr_no : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="old_regist_no"
          value={props.data ? props.data.old_regist_no : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="serial_no"
          value={props.data ? props.data.serial_no : ""}
        />
      </td>

      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="wareHouse"
          value={props.data ? props.data.wareHouse : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="amount"
          value={props.data ? props.data.amount : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="unit_price"
          value={props.data ? props.data.unit_price : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="drop_date"
          value={props.data ? props.data.drop_date : ""}
        />
      </td>
    </tr>
  );
};
export default FixturesDataTable;
