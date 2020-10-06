import React, { Component } from "react";
import requireAuth from "./auth/requireAuth";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../actions";
import { reduxForm } from "redux-form";
import validate from "./utils/validation";

const Feature = () => {
  return <div>My crib ya'll</div>;
};

export default requireAuth(Feature);
