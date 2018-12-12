import React, { Component } from "react";
import { Button, Form, Header, Message } from 'semantic-ui-react';
import "../Styling/main.css"
import { userLogin }  from '../Actions/action.js'
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

class Login extends Component {
  handleSubmitLogin = () => {
    this.props.userLogin(this.state.username, this.state.password);
  };

  handleChangeUser = event => {
    this.setState({ username: event.target.value });
  };

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleRegisterLink = () => {
    this.props.registerLink();
  };

  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div className="login">
        <Header className="header" as="h2">
          Sign In
        </Header>
        <Form size="large">
          <Form.Field>
          
            <input className='input' placeholder='Username' value= {this.state.username} onChange= {this.handleChangeUser} required autoFocus />
          </Form.Field>
          <Form.Field>
          
            <input className='input' placeholder='Password' type="password" onChange= {this.handleChangePassword}  value= {this.state.password} required  />
          </Form.Field>
          <Button className='submit-button' type='submit' onClick={this.handleSubmitLogin} >Submit</Button>
        </Form>
        <Message className="line" style={{boxShadow: "none"}}>
            _____________________________________
        </Message>
        <div>
          <Message className="message">
            Not a member?
            <Link className="link" to="/register" onClick={this.handleRegisterLink}>
              {" "}
              Sign up
            </Link>
          </Message>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth, register }) => ({
  auth,
  register
});

const mapDispatchToProps = dispatch => {
  return {
    userLogin: (username, password) => {
      dispatch(userLogin(username, password));
    }
  };
};

const Connect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default Connect;
