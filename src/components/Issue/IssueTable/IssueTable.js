import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UseComponentVisible from "../../../helpers/Dropdown";


//components
import GeneralModal from "../../UI/Modals/GeneralModal/GeneralModal";
import classes from "./IssueTable.module.scss";
import IssueTableData from "./IssueTableData/IssueTableData";
const IssueTable = ({issues, loading}) => {
  const { ref, isComponentVisible, handleClick } = UseComponentVisible(false);
 


  if (issues) {
    var data = issues.map((el) => (
      <IssueTableData key={el.id} onClick={() => handleClick(1)} data={el} />
    ));
  }
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
          {!loading ? (
            data
          ) : (
            <tr>
              <td>yükleniyor</td>
            </tr>
          )}
        </tbody>
      </table>
      <GeneralModal
        onClick={() => handleClick(false)}
        ref={ref}
        isVisible={isComponentVisible}
      >
        Bu problemi silmek istediğinize emin misiniz?
      </GeneralModal>
    </div>
  );
};
export default IssueTable;
