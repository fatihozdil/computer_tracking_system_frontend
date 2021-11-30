import React from "react";
import classes from "./FixturesDataTable.module.scss";

const FixturesDataTable = (props) => {
  return (
    <tr>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="order_no"
          value={props.data ? props.data.order_no : ""}
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
          name="product_code"
          value={props.data ? props.data.product_code : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="brand"
          value={props.data ? props.data.brand : ""}
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
          name="regist_no"
          value={props.data ? props.data.regist_no : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="old_regis_no"
          value={props.data ? props.data.old_regis_no : ""}
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
          name="warehouse"
          value={props.data ? props.data.warehouse : ""}
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
