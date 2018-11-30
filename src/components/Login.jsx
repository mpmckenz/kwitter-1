import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      
        <div>
        <form>
  <label>
    Username:
    <input type="text" name="name" />
  </label>
  <label>
    Password:
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" onSubmit={this.handleLoginSubmit} />
  {/* handleLoginSubmit renders login page */}
</form>   
        </div>
      
    );
  }
}
