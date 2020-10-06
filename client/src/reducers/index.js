import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import auth from "./authReducer";
import app from "./snackReducer";

export default combineReducers({
  auth,
  form: formReducer,
  app,
});
