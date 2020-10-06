import React from "react";
import { Field, reduxForm } from "redux-form";
import _ from "lodash";
import { compose } from "redux";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import * as actions from "../../actions";

import { renderTextField } from "../utils/ReduxFormUtils";
import validate from "../utils/validation";
import useStyles from "./styles/authStyles";

const Login = (props) => {
  const classes = useStyles();

  const onSubmit = (formProps) => {
    props.signin(_.pick(formProps, "email", "password"), () => {
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
            Sign in
          </Typography>
        </Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box>
            <Field
              name="email"
              component={renderTextField}
              label="Email"
              autoFocus
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
              variant="outlined"
              type="password"
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
          <Box>{props.errorMessage}</Box>
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
)(Login);