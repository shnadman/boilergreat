import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import _ from "lodash";
import { compose } from "redux";
import { connect, useDispatch } from "react-redux";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import * as actions from "../../actions";
import { renderTextField } from "../utils/ReduxFormUtils";
import validate from "../utils/validation";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";

import useStyles from "./styles/authStyles";

const Signup = (props) => {
  const [showPassword, setShowPassword] = useState({ showPassword: false });

  const handleClickShowPassword = () => {
    setShowPassword({ showPassword: !showPassword });
  };

  const classes = useStyles();

  const onSubmit = (formProps) => {
    props.signup(_.pick(formProps, "name", "email", "password"), () => {
      props.history.push("/");
    });
  };

  const { handleSubmit, pristine, reset, submitting, invalid } = props;
  return (
    <Container maxWidth="xs">
      <Paper className={classes.paper}>
        <Box alignSelf="center">
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className={classes.field}>
            <Field
              name="name"
              component={renderTextField}
              label="Name"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              size="small"
              autoFocus
            />
          </Box>
          <Box>
            <Field
              name="email"
              component={renderTextField}
              label="Email"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              size="small"
              autoComplete="email"
            />
          </Box>
          <Box>
            <Field
              name="password"
              component={renderTextField}
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              size="small"
            />
          </Box>
          <Box />
          <Box>
            <Button
              className={classes.button}
              color="primary"
              variant="contained"
              type="submit"
              disabled={invalid || submitting}
            >
              Submit
            </Button>
            <Button
              className={classes.button}
              color="secondary"
              variant="contained"
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
            >
              Clear Values
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

function mapStateToProps(state) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({ form: "signin", validate })
)(Signup);
