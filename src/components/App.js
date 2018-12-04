import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Navbar from "./navbar.js";
import Login from "./Login";
<<<<<<< HEAD
=======
import Register from "./Register";
>>>>>>> origin/master
// import Posts from "./Posts";
// import EditProfile from "./EditProfile";
// import Homepage from "./Homepage";

class App extends Component {
  render() {
    return (
      <div>
        <Route component={Navbar} />
        <Switch>
          <Route exact path="/" render={() => <Login />} />
<<<<<<< HEAD
          {/* <Route path="/register" render={() => <Register />} /> */}
=======
          <Route path="/register" render={() => <Register />} />
>>>>>>> origin/master
          {/* <Route path="/posts" render={() => <Posts />} /> */}
          {/* <Route path="/edit" render={() => <EditProfile />} /> */}
          {/* <Route path="/home" render={() => <Homepage />} /> */}
        </Switch>

        {/* <Switch>
          <Route path="*" component={Navbar} />
        </Switch> */}
      </div>
    );
  }
}

export default withRouter(App);
