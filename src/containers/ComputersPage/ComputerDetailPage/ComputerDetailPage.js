import React, { useState } from "react";
import { useLocation } from "react-router";
import ComputerProperties from "../../../components/Computer/ComputerProperties/ComputerProperties";
import FixturesDataTable from "../../../components/Computer/FixturesTable/FixturesDataTable/FixturesDataTable";
import FixturesTable from "../../../components/Computer/FixturesTable/FixturesTable";
import IssueTable from "../../../components/Issue/IssueTable/IssueTable";
import Button from "../../../components/UI/Button/Button";
import DropdownTable from "../../../components/UI/DropdownTable/DropdownTable";
import GeneralModal from "../../../components/UI/Modals/GeneralModal/GeneralModal";
import UseComponentVisible from "../../../helpers/Dropdown";
import classes from "./ComputerDetailPage.module.scss";

const ComputerDetailPage = (props) => {
  const { ref, isComponentVisible, handleClick } = UseComponentVisible(false);
  //initialize location method
  const location = useLocation();
  //copy location state
  const computer = { ...location.state.computer };
  //delete data we dont need for computer properties part
  delete computer.fixtures;

  //create state to store computer properties data to use it while updating data
  const [updateComputerData, setUpdateComputerData] = useState(
    location.state.computer
  );

  const fixtureData = location.state.computer.fixtures.map((el, i) => (
    <FixturesDataTable
      updateComputerData={updateComputerData}
      setUpdateComputerData={setUpdateComputerData}
      key={el.id}
      index={i}
      data={el}
    />
  ));
  return (
    <div className={classes.ComputerDetailPage}>
      <div className={classes.main}>
        <div className={classes.title}>
          <h1>5 Numaralı Bilgisayar</h1>
          <Button onClick={() => handleClick(1)}>Değişiklikleri Kaydet</Button>
        </div>
        <DropdownTable title="Bilgisayar Özellikleri">
          <ComputerProperties
            computer={computer}
            setUpdateComputerData={setUpdateComputerData}
          />
        </DropdownTable>
        <DropdownTable title="Demirbaşlar">
          <FixturesTable>{fixtureData}</FixturesTable>
        </DropdownTable>
      </div>
      {/* warning modal  */}
      <GeneralModal
        onClick={() => handleClick(false)}
        ref={ref}
        continueAction={() => {
          handleClick(false);
        }}
        isVisible={isComponentVisible}
      >
        Bu Bilgisayari güncellemek istediğinize emin misiniz?
      </GeneralModal>
    </div>
  );
};
export default ComputerDetailPage;
