import jwtDecode from "jwt-decode";
import { HOST_URL } from "../../settings.js";
import * as actionTypes from "./actionTypes";

export const readComputersStart = () => {
  return {
    type: actionTypes.READ_COMPUTERS_START,
  };
};

export const readComputersSuccess = (computers) => {
  return {
    type: actionTypes.READ_COMPUTERS_SUCCESS,
    computers: computers,
  };
};

export const readComputersFail = (error) => {
  return {
    type: actionTypes.READ_COMPUTERS_FAIL,
    error: error,
  };
};

//read computer by id
export const readComputerById = (id, setState) => {
  return (dispatch, getState) => {
    const token = getState().auth.token;

    const config = {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
    fetch(HOST_URL + "computer/getComputerById?id=" + id, config)
      .then((response) => response.json())
      .then((data) => setState(data))
      .catch((err) => console.error(err));
  };
};
