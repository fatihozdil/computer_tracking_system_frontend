import axios from "axios";
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

export const signupStart = () => {
  return {
    type: actionTypes.SIGNUP_START,
  };
};

export const signupSuccess = () => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
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
export const fetchUser = (user) => {
  return {
    type: actionTypes.FETCH_USER,
    user: user,
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
      dispatch(signupStart());
      url = HOST_URL + "user/register";
      authData = {
        name: name,
        email: email,
        password: password,
        password2: password2,
        returnSecureToken: true,
      };
    }

    axios
      .post(url, authData)
      .then((response) => {
        if (!isSignup) {
          const token = response.data.token;
          localStorage.setItem("token", token);
          console.log(response);
          dispatch(authSuccess(response.data.token));
        } else {
          dispatch(signupSuccess());
        }
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

const getUserInfo = (token) => {
//   const headers = {
//     "Content-Type": "application/json",
//     Authorization: `bearer ${token}`,
//   };
//   const myHeaders = new Headers();

// myHeaders.append('Content-Type', 'application/json');
// myHeaders.append('Authorization', token);
//   console.log(token);
//   fetch(HOST_URL + "user/readUserById", {
//     method: 'GET',
//     headers: myHeaders
//   })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
  axios
    .get(HOST_URL + "user/readUserById", {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
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
        getUserInfo(token);
      } else dispatch(logout());
    }
  };
};
