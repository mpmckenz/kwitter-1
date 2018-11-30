import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Navbar from "./navbar.jsx";
import Login from "./Login.jsx";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="*" component={Navbar} />
        </Switch>
        <Switch>
        <Route path="/Login" component={Login} />>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
