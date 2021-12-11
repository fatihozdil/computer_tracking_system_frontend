import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  error: null,
  loading: false,
  issues: [],
};

const readIssueStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true,
  });
};

const readIssueSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    issues: action.issues,
  });
};

const readIssueFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.READ_ISSUE_START:
      return readIssueStart(state, action);
    case actionTypes.READ_ISSUE_SUCCESS:
      return readIssueSuccess(state, action);
    case actionTypes.READ_ISSUE_FAIL:
      return readIssueFail(state, action);

    default:
      return state;
  }
};
export default reducer;
