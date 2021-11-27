import React from "react";
import Button from "../../components/UI/Button/Button";
import classes from "./SignInPage.module.scss";

const SignInPage = (props) => {
  return (
    <div className={classes.SignInPage}>
      <h3> Yönetici Girişi </h3>
      <div className={classes.signInBox}>
        <div className={classes.input}>
          <label for="email">EPosta</label>
          <input type="email" id="email" />
        </div>

        <div className={classes.input}>
          <label for="password">Şifre</label>
          <input type="password" id="password" />
        </div>
        <p className={classes.forgatPassword}>Şifremi Unuttum!</p>
        <Button style={{ marginLeft: "auto", width: "100px", height: "30px" }}>
          Giriş Yap
        </Button>
      </div>
    </div>
  );
};
export default SignInPage;
