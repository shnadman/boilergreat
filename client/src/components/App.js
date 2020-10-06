import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import history from "../history";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Feature from "./RestrictedFeature";
import Box from "@material-ui/core/Box";
import Signout from "./auth/Signout";
import AppBar from "./utils/AppBar";
import Notifier from "./utils/Notifier";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Box>
            <Notifier />
            <Signout />
            {AppBar()}
          </Box>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/api/users/me" exact component={Feature} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
