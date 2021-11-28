import React from "react";
import { Link } from "react-router-dom";
import ComputerListTable from "../../../components/Computer/ComputerListTable/ComputerListTable";
import Button from "../../../components/UI/Button/Button";
import classes from "./Main.module.scss";

const Main = (props) => {
  return (
    <div className={classes.main}>
      <h1>Bilgisayarlar</h1>
      <div className={classes.top}>
        <div className={classes.Search}>
          <input type="text" name="search" placeholder="ara!" />
          <span className="material-icons">search</span>
        </div>
        <Button className={classes.newComputerButton}>
          <Link to="create-newC">Yeni Ekle</Link>
        </Button>
      </div>
      <ComputerListTable />
    </div>
  );
};
export default Main;
