import React from "react";

import axios from "axios";
import { AUTH_USER, AUTH_ERROR, SHOW_PASSWORD } from "./types";

export const signup = (formProps, callback) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/users",
      formProps
    );

    dispatch({
      type: AUTH_USER,
      payload: response.headers["x-auth-token"],
    });

    localStorage.setItem("x-auth-token", response.headers["x-auth-token"]);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: e.response.data });
  }
};

export const signin = (formProps, callback) => async (dispatch, getState) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/auth",
      formProps
    );

    dispatch({ type: AUTH_USER, payload: response.data.token });
    localStorage.setItem("x-auth-token", response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: e.response.data });
  }
};

export const signout = () => {
  localStorage.removeItem("x-auth-token");

  return {
    type: AUTH_USER,
    payload: "",
  };
};

export const showPassword = () => ({ type: SHOW_PASSWORD, payload: "" });
