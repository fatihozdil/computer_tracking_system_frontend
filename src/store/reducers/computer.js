import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  computers: [],
  filteredComputers: [],
};

const readComputerSuccess = (state, action) => {
  return updateObject(state, {
    computers: action.computers,
  });
};

const readSearchedComputerSuccess = (state, action) => {
  return updateObject(state, {
    filteredComputers: action.filteredComputers,
  });
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.READ_COMPUTER_SUCCESS:
      return readComputerSuccess(state, action);

    case actionTypes.READ_SEARCHED_COMPUTER_SUCCESS:
      return readSearchedComputerSuccess(state, action);

    default:
      return state;
  }
};
export default reducer;
