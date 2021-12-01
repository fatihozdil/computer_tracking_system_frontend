import React from "react";
import Button from "../../components/UI/Button/Button";
import GeneralModal from "../../components/UI/Modals/GeneralModal/GeneralModal";
import UserTable from "../../components/User/UserTable/UserTable";
import UseComponentVisible from "../../helpers/Dropdown";
import classes from "./UsersPage.module.scss";

const UsersPage = (props) => {
  const { ref, isComponentVisible, handleClick } = UseComponentVisible(false);
  return (
    <div className={classes.UserPage}>
      <div className={classes.main}>
        <div className={classes.title}>
          <h1>Kullanıcılar </h1>
          <Button>Kullanıcı Ekle</Button>
        </div>
        <UserTable onClick={() => handleClick(1)} />
      </div>
      <GeneralModal
        onClick={() => handleClick(false)}
        ref={ref}
        isVisible={isComponentVisible}
      >
        Bu kullanıcıyı silmek istediğinize emin misiniz?
      </GeneralModal>
    </div>
  );
};
export default UsersPage;
