import jwtDecode from "jwt-decode";
import { HOST_URL } from "../../settings.js";
import * as actionTypes from "./actionTypes";

export const readComputerSuccess = (computers) => {
  return {
    type: actionTypes.READ_COMPUTER_SUCCESS,
    computers: computers,
  };
};
export const readSearchedComputerSuccess = (filteredComputers) => {
  return {
    type: actionTypes.READ_SEARCHED_COMPUTER_SUCCESS,
    filteredComputers: filteredComputers,
  };
};

//read all computers
export const readAllComputers = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    const config = {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
    fetch(HOST_URL + "computer/readComputers", config)
      .then((response) => response.json())
      .then((data) => dispatch(readComputerSuccess(data.data)))
      .catch((err) => console.error(err));
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

//update computer
export const updateComputerById = (data) => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    const config = {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    fetch(HOST_URL + "computer/updateComputer", config)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };
};
