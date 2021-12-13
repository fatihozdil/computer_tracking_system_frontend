import React, { useState } from "react";
import classes from "./ComputerProperties.module.scss";

const ComputerProperties = (props) => {
  const { computer } = props;
  const [computerData, setComputerData] = useState(computer);
  const names = [
    "Bilgisayar Numarası",
    "Mac Adresi",
    "İşletim Sistemi",
    "cpu",
    "ram",
    "Anakart",
    "Depolama",
    "Ses",
    "Klavye",
    "Fare",
  ];

  const handleChange = (e) => {
    setComputerData({
      ...computerData,
      [e.target.name]: e.target.value,
      id: computer.id,
    });

    props.setUpdateComputerData(computerData);
  };

  const properties = Object.keys(computerData).map((el, i) => {
    if (i != 0) {
      return (
        <div key={el} className={classes.property}>
          <label htmlFor={el}>{names[i - 1]}</label>
          <input
            id={el}
            onChange={handleChange}
            name={el}
            value={computerData[el]}
            type="text"
          />
        </div>
      );
    }
  });
  return <div className={classes.ComputerProperties}>{properties}</div>;
};
export default ComputerProperties;
