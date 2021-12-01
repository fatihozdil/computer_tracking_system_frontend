import React from "react";
import Button from "../../Button/Button";
import classes from "./AddNewUser.module.scss";

const AddNewUser = React.forwardRef((props, ref) => {
  let AddNewUser = classes.AddNewUser;
  if (props.isVisible === 2) {
    AddNewUser = `${classes.AddNewUser} ${classes.AddNewUser_open}`;
  }
  return (
    <div ref={ref} className={AddNewUser}>
      <div>
        <label for="name">İsim Soyisim</label>
        <input id="name" name="name" type="text" />
      </div>

      <div>
        <label for="email">Eposta</label>
        <input id="email" name="email" type="email" />
      </div>

      <div>
        <label for="pass1">Şifre</label>
        <input id="pass1" name="pass1" type="password" />
      </div>

      <div>
        <label for="pass2">Şifre Tekrar</label>
        <input id="pass2" name="pass2" type="password" />
      </div>

      <Button>Ekle</Button>
    </div>
  );
});
export default AddNewUser;
