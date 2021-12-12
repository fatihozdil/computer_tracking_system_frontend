import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import * as actions from "../../store/actions/index";
//components
import IssueTable from "../../components/Issue/IssueTable/IssueTable";
import IssueDetailPage from "./IssueDetailPage/IssueDetailPage";
import classes from "./IssuePage.module.scss";

const IssuePage = () => {
  const dispatch = useDispatch();

  const issues = useSelector((state) => state.issue.issues);

  useEffect(() => {
    dispatch(actions.readAllIssues());
  }, [dispatch]);

  const routes = (
    <Routes>
      <Route path="/" element={<IssueTable issues={issues} />} />
      <Route path="/detail/:id" element={<IssueDetailPage />} />
    </Routes>
  );
  return <div className={classes.IssuePage}>{routes}</div>;
};
export default IssuePage;
