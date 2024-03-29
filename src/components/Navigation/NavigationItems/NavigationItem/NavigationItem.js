import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.scss";

const NavigationText = (props) => {
  return (
    <li className={classes.NavigationText}>
      <NavLink
        to={props.link}
        exact={props.exact}
        className={({ isActive }) => (isActive ? classes.active : "")}
      >
        {props.children}
      </NavLink>
    </li>
  );
};
export default NavigationText;
