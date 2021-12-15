import jwtDecode from "jwt-decode";
import { HOST_URL } from "../../settings.js";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
  };
};
export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

//remove authentication
export const logout = () => {
  localStorage.removeItem("token");

  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

//fetch login user's info
export const fetchUser = (name) => {
  return {
    type: actionTypes.FETCH_USER,
    name: name,
  };
};

//automatically logout when token expired

export const checkAuthTimeOutToken = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
      window.location.reload();
    }, expirationTime * 1000);
  };
};

// login or signup

export const auth = (email, password, isSignup, name, password2) => {
  return (dispatch) => {
    dispatch(authStart());
    let authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url = HOST_URL + "user/Authenticate";
    if (isSignup) {
      url = HOST_URL + "user/register";
      authData = {
        name: name,
        email: email,
        password: password,
        password2: password2,
        returnSecureToken: true,
      };
    }
    const config = {
      method: "POST",
      body: JSON.stringify(authData),
    };
    fetch(url, config)
      .then((data) => data.json())
      .then((response) => {
        if (!isSignup) {
          const token = response.token;
          localStorage.setItem("token", token);
          dispatch(authSuccess(token));
        }
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const getUserInfo = (token) => {
  return (dispatch) => {
    const config = {
      method: "GET",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
    };
    fetch(HOST_URL + "user/readUserById", config)
      .then((response) => response.json())
      .then((data) => dispatch(fetchUser(data.name)))
      .catch((err) => console.error(err));

    dispatch(authSuccess(token));
  };
};

// check authentication
export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) dispatch(logout());
    else {
      const expirationDate = jwtDecode(token).exp * 1000;
      if (expirationDate > new Date()) {
        dispatch(
          checkAuthTimeOutToken((expirationDate - new Date().getTime()) / 1000)
        );
        dispatch(getUserInfo(token));
      } else dispatch(logout());
    }
  };
};
