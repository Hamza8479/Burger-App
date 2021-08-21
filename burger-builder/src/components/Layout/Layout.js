import React, { useState } from "react";
import Auxiliary from "../../hoc/Auxiliary";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const Layout = (props) => {
  const [state, setState] = useState({
    showSideDrawer: false,
  });
  const sideDrawerCloseHandler = () => {
    setState({ showSideDrawer: false });
  };

  const menuHandler = (prev) => {
    setState({ showSideDrawer: !prev.showSideDrawer });
  };

  return (
    <Auxiliary>
      <Toolbar menu={menuHandler} />
      <SideDrawer closed={sideDrawerCloseHandler} open={state.showSideDrawer} />
      <main className={classes.Content}>{props.children}</main>
    </Auxiliary>
  );
};

export default Layout;
