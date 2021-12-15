import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "./store/actions/index";

//components
import Layout from "./hoc/Layout/Layout";
import SignInPage from "./containers/SignInPage/SignInPage";
import IssuePage from "./containers/IssuePage/IssuePage";
import ComputersPage from "./containers/ComputersPage/ComputersPage";
import UsersPage from "./containers/UsersPage/UsersPage";
import CreateIssuePage from "./containers/CreateIssuePage/CreateIssuePage";

function App() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  useEffect(() => {
    //check if user token expired
    if (pathname !== "signin") {
      dispatch(actions.authCheckState());
    }
  }, [pathname, dispatch]);

  let routes;
routes = (
    <Routes>
      <Route path="/issue/*" element={<IssuePage />} />
      <Route path="/computers/*" element={<ComputersPage />} />
      <Route path="/users" element={<UsersPage />} />
      <Route path="/CreateIssue" element={<CreateIssuePage />} />
      {/* 

      <Route path="*" element={<Navigate to="/issue" />} /> 
      */}
    </Routes>
  );
  if (!token) {
    routes = (
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        {/*
         <Route path="*" element={<Navigate to="/signin" />} />
          */}
      </Routes>
    );
  }
  return (
    <div className="App" style={{ backgroundColor: "#d9d9d9" }}>
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
