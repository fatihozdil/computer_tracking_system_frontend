import React from "react";
import classes from "./Toolbar.module.scss";
import NavigationItems from "../NavigationItems/NavigationItems.js";
import DrawerToggle from "../DrawerToggle/DrawerToggle";
import { useSelector } from "react-redux";
const Toolbar = () => {
  const token = useSelector((state) => state.auth.token);
  return (
    <nav className={classes.navbar}>
      <div>{token && <DrawerToggle />}</div>
      <NavigationItems />
    </nav>
  );
};
export default Toolbar;
