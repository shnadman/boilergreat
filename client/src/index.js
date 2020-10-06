import React from "react";
import ReactDOM from "react-dom";
import { Provider, useDispatch } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";
import { SnackbarProvider } from "notistack";
import notify from "./middleware/notify";

require("dotenv").config();

const INITIAL_STATE = {
  auth: { authenticated: localStorage.getItem("x-auth-token") },
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  INITIAL_STATE,
  composeEnhancers(applyMiddleware(reduxThunk, notify))
);

ReactDOM.render(
  <Provider store={store}>
    <SnackbarProvider maxSnack={3}>
      <App />
    </SnackbarProvider>
  </Provider>,
  document.querySelector("#root")
);
