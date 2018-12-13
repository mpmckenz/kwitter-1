import React, { Component } from "react";
import { Button, Form, Header, Message, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { register, loginLink } from "../Actions/action.js";
import "../styling/main.css";
// import  from "react-router";

class Register extends Component {
  state = {
    displayName: "",
    username: "",
    password: "",
    passwordRepeat: "",
    passwordMatches: true
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

  handleChangeMatch = event => {
    this.setState({
      passwordRepeat: event.target.value
    });
  };

  noMatch = () => {
    return <Segment color="red">Entered passwords do not match.</Segment>;
  };

  usernameFail = () => {
    return (
      <Segment color="red">
        Username taken. Choose a different username.
      </Segment>
    );
  };

  handleLoginLink = () => {
    this.props.loginLink();
  };

  handleRegister = event => {
    if (
      this.state.displayName &&
      this.state.username &&
      this.state.password === this.state.passwordRepeat
    ) {
      this.setState({ passwordMatches: true });
      console.log("handle was called");
      this.props.register({
        username: this.state.username,
        password: this.state.password,
        displayName: this.state.displayName
      });
    }

    if (this.state.password !== this.state.passwordRepeat) {
      this.setState({ passwordMatches: false });
    } else {
      this.setState({ passwordMatches: true });
    }
  };

  render() {
    return (
      <div className="register">
        <Header className="header" as="h2">
          Sign Up
        </Header>
        <Form size="large">
          {/* { this.props.register.isUsernameFail ? this.usernameFail() : null } */}
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
            <input
              className="input"
              placeholder="Password"
              type="password"
              value={this.state.password}
              onChange={this.handleChangePassword}
              required
            />
          </Form.Field>
          <Form.Field>
            {this.props.passwordMatches ? null : this.noMatch()}
            <input
              className="input"
              placeholder="Re-Enter Password"
              type="password"
              value={this.state.passwordRepeat}
              onChange={this.handleChangeMatch}
              required
            />
          </Form.Field>
          <Button
            className="submit-button"
            // style={{
            //     margin: "auto",
            //     textAlign: "center",
            //     height: "40px",
            //     width: "40%",
            //     marginLeft: "30%",
            //     marginRight: "30%",
            //     color: "white",
            //     backgroundColor: "#A00099"
            // }}
            // type="submit"
            onClick={this.handleRegister}
          >
            Register
          </Button>
        </Form>
        <div>
          <h3>{this.props.result}</h3>
        </div>
        <Message className="line" style={{ boxShadow: "none" }}>
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
