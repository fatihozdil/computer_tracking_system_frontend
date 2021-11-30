import React from "react";
import Button from "../../components/UI/Button/Button";
import UserTable from "../../components/User/UserTable/UserTable";
import classes from "./UsersPage.module.scss";

const UsersPage = (props) => {
  return (
    <div className={classes.UserPage}>
      <div className={classes.main}>
        <div className={classes.title}>
          <h1>Kullanıcılar </h1>
          <Button>Kullanıcı Ekle</Button>
        </div>
        <UserTable />
      </div>
    </div>
  );
};
export default UsersPage;
