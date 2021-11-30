import React from "react";
import UserDataTable from "./UserDataTable/UserDataTable";
import classes from "./UserTable.module.scss";

const UserTable = (props) => {
  const data = {
    name_surname: "fatih ozdil",
    email: "test@test.com",
  };
  return (
    <div className={classes.UserTable}>
      <table role="table">
        <thead>
          <tr role="row">
            <th role="columnheader">Adı Soyadı</th>
            <th role="columnheader">Eposta</th>
            <th role="columnheader"></th>
          </tr>
        </thead>

        <tbody>
          <UserDataTable data={data} />
          <UserDataTable data={data} />
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;
