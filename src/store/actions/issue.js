import { HOST_URL } from "../../settings.js";
import * as actionTypes from "./actionTypes";

export const readIssueStart = () => {
  return {
    type: actionTypes.READ_ISSUE_START,
  };
};

export const readIssueSuccess = (issues) => {
  return {
    type: actionTypes.READ_ISSUE_SUCCESS,
    issues: issues,
  };
};
export const readIssueFail = (err) => {
  return {
    type: actionTypes.READ_ISSUE_FAIL,
    error: err,
  };
};

//read all issues
export const readAllIssues = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    dispatch(readIssueStart());
    const config = {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
    fetch(HOST_URL + "/issue/read", config)
      .then((response) => response.json())
      .then((data) => dispatch(readIssueSuccess(data.data)))
      .catch((err) => {
        console.log(err);
        dispatch(readIssueFail(err));
      });
  };
};
