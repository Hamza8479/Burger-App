import React from "react";
import classes from "./DrawerToggle.module.css";

const DrawerToggler = (props) => {
  return (
    <div onClick={props.menu} className={classes.DrawerToggle}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToggler;
