import React from "react";
import IssueTable from "../../components/Navigation/Issue/IssueTable/IssueTable";
import classes from "./IssuePage.module.scss";

const IssuePage = () => {
  const data = {
    issue_id: 1,
    computer_id: 23,
    sender_name: "fatih ozdil",
    sender_title: "ogrenci",
    sender_message: "bilgisayar acilmiyor",
    reported_date: "08.08.2021 01:19",
    is_solved: "evet",
    solver_name: "fatih ozdil",
    solver_message: "anakart degisti",
  };
  return (
    <div className={classes.IssuePage}>
      <table role="table">
        <thead>
          <tr role="row">
            <th role="columnheader">Arıza id</th>
            <th role="columnheader">Bilgisayar adı</th>
            <th role="columnheader">Gönderen Adı</th>
            <th role="columnheader">Gönderen Ünvan</th>
            <th role="columnheader">Gönderen Mesajı</th>
            <th role="columnheader">Gönderilme Tarihi</th>
            <th role="columnheader">Çözülme Durumu</th>
            <th role="columnheader">Problemi Çözen</th>
            <th role="columnheader">Çözen Mesajı</th>
            <th role="columnheader"></th>
            <th role="columnheader"></th>
          </tr>
        </thead>

        <tbody>
          <IssueTable data={data} />
        </tbody>
      </table>
    </div>
  );
};
export default IssuePage;
