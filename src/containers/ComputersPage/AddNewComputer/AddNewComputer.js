import React, { useState } from "react";
import ComputerProperties from "../../../components/Computer/ComputerProperties/ComputerProperties";
import FixturesDataTable from "../../../components/Computer/FixturesTable/FixturesDataTable/FixturesDataTable";
import FixturesTable from "../../../components/Computer/FixturesTable/FixturesTable";
import Button from "../../../components/UI/Button/Button";
import classes from "./AddNewComputer.module.scss";

const AddNewComputer = (props) => {
  const [arr, setArr] = useState([<FixturesDataTable />]);

  const data = arr.map((el) => el);
  return (
    <div className={classes.AddNewComputer}>
      <div className={classes.main}>
        <h1>Bilgisayar Ekle</h1>
        <h3>Bilgisayar Özellikleri </h3>
        <ComputerProperties />
        <h3>Demirbaş Bilgileri </h3>
        <FixturesTable>
          {data}

          <Button
            style={{ marginLeft: "auto" }}
            onClick={() => setArr([...arr, <FixturesDataTable />])}
          >
            yeni demirbaş ekle
          </Button>
        </FixturesTable>
        <div className={classes.bottom}>
          <select name="option">
            <option value="">Yeni Eklemek için Bu sayfada Kal</option>
            <option value="">Bilgisayarlar Sayfasına Dön</option>
          </select>
          <Button
            style={{
              width: "80px",
              height: "30px",
              marginLeft: "auto",
              display: "block",
            }}
          >
            Ekle
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AddNewComputer;
