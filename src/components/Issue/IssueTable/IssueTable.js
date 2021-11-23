import React from "react";
import classes from "./IssueTable.module.scss";
import IssueTableData from "./IssueTableData/IssueTableData";
const IssueTable = (props) => {
  const data = {
    issue_id: 1,
    computer_id: 23,
    sender_name: "fatih ozdil",
    sender_title: "ogrenci",
    sender_message: "bilgisayar acilmiyor",
    reported_date: "08.08.2021 01:19",
    is_solved: false,
    solver_name: "fatih ozdil",
    solver_message: "anakart degisti",
  };
  return (
    <div className={classes.IssueTable}>
      <table role="table">
        <thead>
          <tr role="row">
            <th role="columnheader">
              <button>
                Arıza id
                <span className="material-icons">keyboard_arrow_down</span>
              </button>
            </th>
            <th role="columnheader">
              <button>
                Bilgisayar adı
                <span className="material-icons">keyboard_arrow_down</span>
              </button>
            </th>
            <th role="columnheader">Gönderen Adı</th>
            <th role="columnheader">Gönderen Ünvan</th>
            <th role="columnheader">Gönderen Mesajı</th>
            <th role="columnheader">
              <button>
                Gönderilme Tarihi
                <span className="material-icons">keyboard_arrow_down</span>
              </button>
            </th>
            <th role="columnheader">
              <button>
                Çözülme Durumu
                <span className="material-icons">keyboard_arrow_down</span>
              </button>
            </th>
            <th role="columnheader">Problemi Çözen</th>
            <th role="columnheader">Çözen Mesajı</th>
            <th role="columnheader"></th>
            <th role="columnheader"></th>
          </tr>
        </thead>

        <tbody>
          <IssueTableData data={data} />
          <IssueTableData data={data} />
          <IssueTableData data={data} />
        </tbody>
      </table>
    </div>
  );
};
export default IssueTable;
