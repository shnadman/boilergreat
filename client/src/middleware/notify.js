import React from "react";
import { AUTH_ERROR, AUTH_USER } from "../actions/types";
import { closeSnackbar, enqueueSnackbar } from "../actions/snackbarActions";
import Button from "@material-ui/core/Button";

const makeNotification = (message, variant) => ({
  message,
  options: {
    autoHideDuration: 2000,
    key: `key_${Math.random()}`,
    variant,
    // action: (id) => <Button onClick={() => closeSnackbar(id)}></Button>, //couldnt get closeSnackbar to work
  },
});

export default ({ dispatch }) => (next) => (action) => {
  switch (action.type) {
    case AUTH_ERROR:
      dispatch(enqueueSnackbar(makeNotification(action.payload, "warning")));
      next(action);
      break;
    case AUTH_USER:
      action.payload
        ? dispatch(
            enqueueSnackbar(
              makeNotification("Account created successfully! :)", "success")
            )
          )
        : dispatch(
            enqueueSnackbar(makeNotification("Logged out successfully", "info"))
          );
      next(action);
      break;
    default:
      next(action);
  }
};
