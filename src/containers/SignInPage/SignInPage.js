import React, { useState } from "react";
import { useDispatch } from "react-redux";
//components
import Button from "../../components/UI/Button/Button";
import classes from "./SignInPage.module.scss";
import * as actions from "../../store/actions/index";
const SignInPage = (props) => {
  const [userData, setUserDate] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handleChange = (evt) => {
    setUserDate({
      ...userData,
      [evt.target.id]: evt.target.value,
    });
  };

  const submitHandler = () => {
    dispatch(actions.auth(userData.email, userData.password));
  };

  return (
    <div className={classes.SignInPage}>
      <h3> Yönetici Girişi </h3>
      <div className={classes.signInBox}>
        <div className={classes.input}>
          <label htmlFor="email">E Posta</label>
          <input
            type="email"
            id="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>

        <div className={classes.input}>
          <label htmlFor="password">Şifre</label>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            value={userData.password}
          />
        </div>
        <p className={classes.forgatPassword}>Şifremi Unuttum!</p>
        <Button
          style={{ marginLeft: "auto", width: "100px", height: "30px" }}
          onClick={submitHandler}
        >
          Giriş Yap
        </Button>
      </div>
    </div>
  );
};
export default SignInPage;
