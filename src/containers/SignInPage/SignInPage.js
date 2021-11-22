import React from "react";
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
        <button className={classes.button}>Giriş Yap</button>
      </div>
    </div>
  );
};
export default SignInPage;
