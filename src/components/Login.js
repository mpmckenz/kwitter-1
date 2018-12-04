import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div>
        <div>
          {/* handleLoginSubmit renders login page */}
          <input onSubmit={this.handleLoginSubmit} />
        </div>
      </div>
    );
  }
}
