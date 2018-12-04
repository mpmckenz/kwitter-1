import React, { Component } from "react";
import { Button, Form, Header } from 'semantic-ui-react';
import "../styling/login.css"
import { connectRouter } from 'connected-react-router';
import { userLogin } from './loginAction'




class Login extends Component {

  

  handleSubmitLogin = () => {
    this.props.userLogin(this.state.username, this.state.password)
  }

  handleChangeUser = (event) => {
    this.setState({username: event.target.value})
  }

  handleChangePassword = (event) => {
    this.setState({password: event.target.value}) 
  }

  state = {
    username: "",
    password: ""
  }

  render() {
    return (
      <div className="login">
      <Header className='header' as='h2'>
              Sign In
            </Header>
      <Form size="large">
    <Form.Field>
      
      <input className='input' placeholder='Username' value= {this.state.username} onChange= {this.handleChangeUser} required autoFocus />
    </Form.Field>
    <Form.Field>
      
      <input className='input' placeholder='Password' type="password" onChange= {this.handleChangePassword}  value= {this.state.password} required autoFocus  />
    </Form.Field>
    <Button className='submit-button' type='submit' onSubmit={this.handleLoginSubmit} >Submit</Button>
  </Form>
        </div>
      
    );
  }
}

const mapStateToProps = ({auth , register}) => ({
  auth,
  register
});

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (username, password) => {
      dispatch(userLogin(username, password))
    },
  }
}

export default connectRouter( mapStateToProps , mapDispatchToProps )(Login)