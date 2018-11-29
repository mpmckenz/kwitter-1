import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Navbar from './navbar.jsx'


class App extends Component {
  render() {
    return (

      <div>
        <Switch>
        <Route path='*' component={Navbar}/>
      </Switch>
      </div>
      
      
    );
  }
}

export default withRouter((App));
