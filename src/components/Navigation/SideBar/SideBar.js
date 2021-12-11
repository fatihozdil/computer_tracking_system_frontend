import React from "react";
import classes from "./SideBar.module.scss";
import NavigationText from "../NavigationItems/NavigationItem/NavigationItem";
import { useSelector } from "react-redux";
const SideBar = (props) => {
  //display side bar when clicked drawerToggle
  //define variables for dynamic classnames to display side bar
  let sideBar = classes.SideBar_hide;

  if (props.isVisible === 1)
    sideBar = `${classes.SideBar_hide} ${classes.SideBar_show}`;

  return (
    <div className={sideBar} ref={props.ref1}>
      <div className={classes.title}>
        <h5>Hoşgeldiniz</h5>
        <h3>{useSelector(state => state.auth.name)}</h3>
      </div>
      <ul className={classes.Texts}>
        <NavigationText link="/issue">Bildirilen Problemler</NavigationText>
        <NavigationText link="/computers">Bilgisayarlar</NavigationText>
        <NavigationText link="/users">Kullanıcılar</NavigationText>
      </ul>
    </div>
  );
};
export default SideBar;
