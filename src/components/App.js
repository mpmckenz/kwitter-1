import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Navbar from "./Navbar.js";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="*" component={Navbar} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
