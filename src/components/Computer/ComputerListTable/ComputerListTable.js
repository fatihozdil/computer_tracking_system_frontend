import React from "react";
import ComputerListDataTable from "./ComputerListDataTable/ComputerListDataTable";
import classes from "./ComputerListTable.module.scss";

const ComputerListTable = (props) => {
  const data = {
    computer_id: "Bilgisayar ID",
    computer_name: "Bilgisayar Adı",
    operating_system: "İşletim Sistemi",
    cpu: "Cpu",
    ram: "ram",
    storage: "Depolama",
  };
  const dataTable = props.computers.map((el) => {
    return <ComputerListDataTable key={el.id} data={el} />;
  });
  return (
    <div className={classes.ComputerListTable}>
      <table role="table">
        <thead>
          <tr role="row">
            <th role="columnheader">
              <button>
                Bilgisayar ID
                <span className="material-icons">keyboard_arrow_down</span>
              </button>
            </th>
            <th role="columnheader">
              <button>
                Bilgisayar Adı
                <span className="material-icons">keyboard_arrow_down</span>
              </button>
            </th>
            <th role="columnheader">İşletim Sistemi</th>
            <th role="columnheader">cpu</th>
            <th role="columnheader">ram</th>
            <th role="columnheader">Depolama</th>
            <th role="columnheader"></th>
            <th role="columnheader">Kopyala</th>
          </tr>
        </thead>

        <tbody>{dataTable}</tbody>
      </table>
    </div>
  );
};
export default ComputerListTable;
