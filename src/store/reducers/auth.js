import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  error: null,
  loading: false,
  user: null,
};

const authStart = (state, action) => {
  return updateObject(state, { error: null, loading: true });
};

const signupStart = (state, action) => {
  return updateObject(state, {
    signupLoading: true,
  });
};

const signupSuccess = (state, action) => {
  return updateObject(state, {
    signupLoading: false,
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {

    error: null,
    loading: false,
  });
};

const fetchUser = (state, action) => {
  return updateObject(state, {
    user: action.user,
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false,
    signupLoading: false,
  });
};

const authLogout = (state, action) => {
  return updateObject(state, { token: null });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.FETCH_USER:
      return fetchUser(state, action);
    case actionTypes.SIGNUP_START:
      return signupStart(state, action);
    case actionTypes.SIGNUP_SUCCESS:
      return signupSuccess(state, action);

    default:
      return state;
  }
};

export default reducer;