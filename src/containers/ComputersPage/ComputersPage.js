import React from "react";
import { Route, Routes } from "react-router-dom";

import classes from "./ComputersPage.module.scss";
import Main from "./Main/Main";

const ComputersPage = () => {
  const routes = (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );

  return <div className={classes.ComputersPage}>{routes}</div>;
};

export default ComputersPage;
