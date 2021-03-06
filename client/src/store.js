import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import auth from "./features/auth";
import app from "./reducers/snackReducer";
import { reducer as formReducer } from "redux-form";
import notify from "./middleware/notify";

const reducer = {
  auth,
  form: formReducer,
  app,
};

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer,
    middleware: [notify, ...getDefaultMiddleware()],
    preloadedState,
  });

  return store;
}
