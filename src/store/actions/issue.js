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
export const readAllIssues = (order) => {
  return (dispatch, getState) => {
    let str;

    let url = HOST_URL + "/issue/read";
    if (order) {
      if (order.order) str = "ASC";
      else str = "DESC";

      url = HOST_URL + "/issue/read?entity=" + order.entity + "&order=" + str;
    }
    const token = getState().auth.token;
    dispatch(readIssueStart());
    const config = {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
    fetch(url, config)
      .then((response) => response.json())
      .then((data) => dispatch(readIssueSuccess(data.data)))
      .catch((err) => {
        console.error(err);
        dispatch(readIssueFail(err));
      });
  };
};

//read issues by computer id
export const readIssuesByComputerId = (computer_id, issue_id, setState) => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    const config = {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
    fetch(
      HOST_URL +
        "/issue/readIssuesByComputerId?computer_id=" +
        computer_id +
        "&issue_id=" +
        issue_id,
      config
    )
      .then((response) => response.json())
      .then((data) => setState(data.data))
      .catch((err) => console.error(err));
  };
};

//delete issue
export const deleteIssueById = (id) => {
  return (dispatch, getState) => {
    const token = getState().auth.token;

    const config = {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    };

    fetch(HOST_URL + "issue/delete", config)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };
};
