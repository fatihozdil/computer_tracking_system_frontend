import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import { setAuthorizationToken } from "./store/actions/setAuthToken";

//reducers
import authReducer from "./store/reducers/auth";
import issueReducer from "./store/reducers/issue";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const jwtToken = localStorage.getItem("token");

if (jwtToken) {
  setAuthorizationToken(jwtToken);
}

const rootReducer = combineReducers({
  auth: authReducer,
  issue: issueReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));
