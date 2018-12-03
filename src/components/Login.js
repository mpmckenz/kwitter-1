import React, { Component } from "react";
import { Button, Form, Header } from 'semantic-ui-react';
import "../styling/login.css"

export default class Login extends Component {

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
      
      <input className='input' placeholder='Username' fluid required autofocus />
    </Form.Field>
    <Form.Field>
      
      <input className='input' placeholder='Password' type="password" fluid required autofocus  />
    </Form.Field>
    <Button className='submit-button' type='submit'>Submit</Button>
  </Form>
        </div>
      
    );
  }
}
