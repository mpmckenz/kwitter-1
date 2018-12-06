import React, { Component } from "react";
import { Button, Form, Header, Message } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { register, loginLink } from "./action";
import "../styling/main.css";
// import  from "react-router";

class Register extends Component {
  state = {
    displayName: "",
    username: "",
    password: ""
    // passwordRepeat: "",
    // passwordMatches: true
  };

  handleChangeDisplayName = event => {
    this.setState({
      displayName: event.target.value
    });
  };

  handleChangeUsername = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  // handleChangeMatch = (event) => {
  //     this.setState({
  //         passwordMatches: event.target.value
  //     });
  // };

  // noMatch = () => {
  //     return (
  //         <Segment color="red">Entered passwords do not match</Segment>
  //     )
  // }

  handleLoginLink = () => {
    this.props.loginLink();
  };

  handleRegister = event => {
    console.log("handle was called");
    this.props.register({
      username: this.state.username,
      password: this.state.password,
      displayName: this.state.displayName
    });
  };

  render() {
    return (
      <div className="register">
        <Header className="header" as="h2">
          Sign Up
        </Header>
        <Form size="large">
          <Form.Field>
            <input
              className="input"
              placeholder="Display Name"
              value={this.state.displayName}
              onChange={this.handleChangeDisplayName}
              required
              autoFocus
            />
          </Form.Field>
          <Form.Field>
            <input
              className="input"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChangeUsername}
              required
            />
          </Form.Field>
          <Form.Field>
            {/* { this.state.passwordMatches ? null : this.noMatch() } */}
            <input
              className="input"
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
              required
            />
          </Form.Field>
          {/* <Form.Field>
                        <input className="input" placeholder="Re-Enter Password" value={this.state.passwordRepeat} fluid required />
                    </Form.Field> */}
          <Button
            className="submit-button"
            // type="submit"
            onClick={this.handleRegister}
          >
            Register
          </Button>
        </Form>
        <div>
          <h3>{this.props.result}</h3>
        </div>
        <Message className="line">
          _____________________________________
        </Message>
        <div>
          <Message className="message">
            Already signed up?
            <Link className="link" to="/" onClick={this.handleLoginLink}>
              {" "}
              Login
            </Link>
          </Message>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.registerResult
  };
};

const mapDispatchToProps = dispatch => {
  return {
    register: registerData => dispatch(register(registerData))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register)
);
