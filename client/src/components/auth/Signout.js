import React from "react";
import Button from "@material-ui/core/Button";
import { signout } from "../../actions";
import { connect } from "react-redux";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const Signout = ({ signout, auth }) => (
  <Button
    onClick={signout}
    variant="contained"
    color="secondary"
    startIcon={<ExitToAppIcon />}
    disabled={!auth}
  >
    Sign out
  </Button>
);

function mapStateToProps(state) {
  return { auth: state.auth.authenticated };
}

export default connect(mapStateToProps, { signout })(Signout);
