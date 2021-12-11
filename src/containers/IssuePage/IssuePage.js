import React from "react";
import { Route, Routes } from "react-router-dom";
//components
import IssueTable from "../../components/Issue/IssueTable/IssueTable";
import IssueDetailPage from "./IssueDetailPage/IssueDetailPage";
import classes from "./IssuePage.module.scss";

const IssuePage = () => {
  const routes = (
    <Routes>
      <Route path="/" element={<IssueTable />} />
      <Route path="/detail" element={<IssueDetailPage />} />
    </Routes>
  );
  return <div className={classes.IssuePage}>{routes}</div>;
};
export default IssuePage;
