import jwtDecode from "jwt-decode";
import { HOST_URL } from "../../settings.js";
import * as actionTypes from "./actionTypes";

//get user by id
export const getUserById = (id, setState) => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    const config = {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
    fetch(HOST_URL + "/user/readUserById?id=" + id, config)
      .then((response) => response.json())
      .then((data) => setState(data))
      .catch((err) => {
        console.log(err);
      });
  };
};
