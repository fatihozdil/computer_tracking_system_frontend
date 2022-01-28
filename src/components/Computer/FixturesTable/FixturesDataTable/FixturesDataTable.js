import React, { useState } from "react";
import classes from "./FixturesDataTable.module.scss";

const FixturesDataTable = (props) => {
  const [fixtureData, setFixtureData] = useState(props.data);
  const handleChange = (e) => {
    // update fixture data
    setFixtureData({
      ...fixtureData,
      [e.target.name]: e.target.value,
    });

    // copy fixtures to new array to update in object
    let newArr = [...props.updateComputerData.fixtures];
    newArr[props.index][e.target.name] = e.target.value;
    props.setUpdateComputerData({
      ...props.updateComputerData,
      fixtures: newArr,
    });
  };

  return (
    <tr>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="row_no"
          onChange={handleChange}
          value={props.data ? fixtureData.row_no : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="receipt_no"
          onChange={handleChange}
          value={props.data ? fixtureData.receipt_no : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="date"
          onChange={handleChange}
          value={props.data ? fixtureData.date : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="transport_product_code"
          onChange={handleChange}
          value={props.data ? fixtureData.transport_product_code : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="brand_type"
          onChange={handleChange}
          value={props.data ? fixtureData.brand_type : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="measure_unit"
          onChange={handleChange}
          value={props.data ? fixtureData.measure_unit : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="registr_no"
          onChange={handleChange}
          value={props.data ? fixtureData.registr_no : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="old_regist_no"
          onChange={handleChange}
          value={props.data ? fixtureData.old_regist_no : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="serial_no"
          onChange={handleChange}
          value={props.data ? fixtureData.serial_no : ""}
        />
      </td>

      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="wareHouse"
          onChange={handleChange}
          value={props.data ? fixtureData.wareHouse : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="amount"
          onChange={handleChange}
          value={props.data ? fixtureData.amount : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="unit_price"
          onChange={handleChange}
          value={props.data ? fixtureData.unit_price : ""}
        />
      </td>
      <td>
        <textarea
          className={classes.textarea}
          type="text"
          name="drop_date"
          onChange={handleChange}
          value={props.data ? fixtureData.drop_date == null ? "" : fixtureData.drop_date : ""}
        />
      </td>
    </tr>
  );
};
export default FixturesDataTable;
